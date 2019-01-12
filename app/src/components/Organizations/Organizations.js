import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class Organizations extends Component  {
    render() {
      const { classes } = this.props;
    
      return (
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>Organizations</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>Recently Viewed</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>Important Contacts</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>Upcoming Experations</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>Popular Passwords</Paper>
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
    