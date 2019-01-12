import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button, Typography } from '../../../node_modules/@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  headingContainer: {
  },
  heading: {
    marginLeft: '10px',
    fontFamily: 'Poppins',
    marginTop: '10px',
    height: '200px',
    fontSize: '30px',
  },
  button: {
    marginTop: '20px',
    background: '#728aa3',
    color: 'white'
  },
  container: {
    borderBottom: 'solid #d9d5d1 0.5px',
  },
  runBook: {
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginRight: '0'
  },
  btm3: {
    height: '100px',
    textAlign: 'center',
  },
  top3: {
    margin: '20px',
    height: '100px',
    borderBottom: 'solid #edebe9 0.5px',
    textAlign: 'center',
  },
});

class Organizations extends Component  {
    render() {
      const { classes } = this.props;
    
      return (
        <div className={classes.root}>
            <Grid className={classes.headingContainer} container spacing={12}>
                <Grid item xs={8}>
                  <Typography className={classes.heading}>Organizations
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                    <div className={classes.runBook}>
                        <Button className={classes.button} >Create Runbook</Button>
                    </div>   
                </Grid>   
            </Grid>
            <Grid className={classes.container} container spacing={24}>
                <Grid item xs={4}>
                  <Typography className={classes.top3}>Recently Viewed</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography className={classes.top3}>Important Contacts</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography className={classes.top3}>Upcoming Experations</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography className={classes.btm3}>Popular Passwords</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography className={classes.btm3}>Popular Passwords</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography className={classes.btm3}>Popular Passwords</Typography>
                </Grid>
            </Grid> 
        </div>
      );
    }
}

    
    
    Organizations.propTypes = {
      classes: PropTypes.object.isRequired,
    };
    
    export default withStyles(styles)(Organizations);
    