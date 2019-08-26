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
        <ListItem button>
          <ListItemText><span className='righteous'>Play Hockey</span></ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText ><span className='righteous'>My Games</span></ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText><span className='righteous'>Locker Room</span></ListItemText>
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem button>
          <ListItemText><span className='righteous'>Profile</span></ListItemText>
        </ListItem>
        <Logout />
      </List>
    </div>
  );

  return (
    <div>
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
