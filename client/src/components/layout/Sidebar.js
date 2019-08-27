import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Hamburger from '../../images/hamburger.svg'
import Logout from './Logout'
import { Link } from "react-router-dom";


const useStyles = makeStyles({
  list: {
    width: 250,
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    event.preventDefault();
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <Link className="link" to='/play-hockey'>
          <ListItem button>
            <ListItemText><span className='righteous'>Play Hockey</span></ListItemText>
          </ListItem>
        </Link>
        <Link className="link" to='/my-games'>
          <ListItem button>
            <ListItemText ><span className='righteous'>My Games</span></ListItemText>
          </ListItem>
        </Link>
        <Link className="link" to='/locker-room'>
          <ListItem button>
            <ListItemText><span className='righteous'>Locker Room</span></ListItemText>
          </ListItem>
        </Link>
        <Link className="link" to='/messages'>
          <ListItem button>
            <ListItemText><span className='righteous'>Messages</span></ListItemText>
          </ListItem>
        </Link>
      </List>

      <Divider />

      <List>
        <Link className="link" to='/profile'>
          <ListItem button>
            <ListItemText><span className='righteous'>Profile</span></ListItemText>
          </ListItem>
        </Link>
        <Logout />
      </List>
    </div>
  );

  return (
    <div className='spacer'>
        <Button 
            onClick={toggleDrawer('right', true)}
            className='menuBtn'
        >
          <img src={Hamburger} alt='toggle menu' />
        </Button>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {sideList('right')}
      </Drawer>
    </div>
  );
}
