const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load Player model
const Player = require("../../models/Player");

// @route POST api/players/register
// @desc Register player
// @access Public
router.post("/register", (req, res) => {

    // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  Player.findOne({ email: req.body.email }).then(player => {
      if (player) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        const newPlayer = new Player({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });

  // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newPlayer.password, salt, (err, hash) => {
            if (err) throw err;
            newPlayer.password = hash;
            newPlayer
              .save()
              .then(player => res.json(player))
              .catch(err => console.log(err));
          });
        });
      }
    });
  });