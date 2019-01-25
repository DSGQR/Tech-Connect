import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card1 from '../Cards/Card1'
import Card2 from '../Cards/Card2'
import Card3 from '../Cards/Card3'
import Card4 from '../Cards/Card4'


const styles = theme => ({
    root: {
      flexGrow: 1,
      
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    new:{
        marginTop: '100px'
    }
  });
  


  class CenteredGrid extends React.Component{
    
    onbaordingClick = () => {
      console.log("Clicked")
    }

    render(){
      const { classes } = this.props;
  
      return (
        <>
        <AppBar position="" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.root}>
          <Grid container spacing={24} style={{marginLeft:0.1}}>
            <Grid item xs={3} style={{marginTop:'100px'}} >
              <a href='/onboarding'><Card1 /></a>
            </Grid>
            <Grid item xs={3} style={{marginTop:'100px'}}>
            <a href='/onboarding'><Card2 /></a>
            </Grid>
            <Grid item xs={3} style={{marginTop:'100px'}}>
              <Card3 />
            </Grid>
            <Grid item xs={3} style={{marginTop:'100px'}}>
              <Card4 />
            </Grid>
          </Grid>
        </div>
        </>
      );
    }
    
  }
  
  CenteredGrid.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(CenteredGrid);