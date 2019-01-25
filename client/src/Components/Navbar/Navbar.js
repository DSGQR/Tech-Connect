import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer';
import firebase from 'firebase'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  }
};

class Navbar extends React.Component {

  state = {
    open: false
  }

  signOut = () => {
    firebase.auth().signOut()
    window.location = '/'
    
  }


  render() {
    const { anchorEl } = this.state;
    const isMenuOpen = Boolean(anchorEl);
    const { classes } = this.props;


    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={() => this.toggleDrawer(true)} className={classes.menuButton} color="inherit" aria-label="Menu">
              
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Tech Connect
            </Typography>

            {
              this.props.isSignedIn ? (
                <>
                  <Link exact to='./Dashboard' style={{ color: 'white', textDecoration: 'none' }}>
                    <Button color='inherit'>Dashboard</Button>
                  </Link>

                  <Link to='/Organizations' style={{ color: 'white', textDecoration: 'none' }}>
                    <Button color='inherit'>Organizations</Button>
                  </Link>

                    <Button onClick={this.signOut} color='inherit'>Sign Out</Button>
                </>
              ) : (
                <Link to='/' style={{ color: 'white', textDecoration: 'none' }}></Link>
              )
            }

            <Drawer open={this.state.open} onClose={() => this.toggleDrawer(false)}>
              <div
                tabIndex={0}
                role="button"
                onClick={() => this.toggleDrawer(false)}
                onKeyDown={() => this.toggleDrawer(false)}
              >
                
              </div>
            </Drawer>
            <IconButton
              aria-owns={isMenuOpen ? 'material-appbar' : undefined}
              aria-haspopup="true"
              onClick={this.handleProfileMenuOpen}
              color="inherit"
            >

            </IconButton>
            
          </Toolbar>
        </AppBar>
      </div>
    );
  }

}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);