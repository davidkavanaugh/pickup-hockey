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

// @route POST api/players/login
// @desc Login player and return JWT token
// @access Public

router.post("/login", (req, res) => {

  // Form validation

  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find player by email
  Player.findOne({ email }).then(player => {
    // Check if player exists
    if (!player) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

    // Check password
    bcrypt.compare(password, player.password).then(isMatch => {
      if (isMatch) {
        // Player matched
        // Create JWT Payload
        const payload = {
          id: player.id,
          name: player.name
        };

        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

module.exports = router;