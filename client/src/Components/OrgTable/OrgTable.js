import React from 'react';
import axios from 'axios'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  layout:{
    width:1400,
    marginLeft:200
  }
});


class SimpleTable extends React.Component {
    state = {
        organizations: [],
        organization:'',
        key: ''
    }

    componentDidMount = () => {
        axios.get('/organizations')
        .then(r => {
            console.log(r.data)
            this.setState({organizations:r.data})
        })
        .catch(e => console.log(e))
    }

    handleDelete = () => {
      console.log('deleted')
    }

getOrganization = event => {
  axios.get('/organization/:id')
        .then(r => {
            console.log(r.data)
            this.setState({organizations:r.data})
        })
        .catch(e => console.log(e))
}

    render(){
        const { classes } = this.props;

        return (
         <>
          <AppBar position="" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Organizations List
            </Typography>
          </Toolbar>
        </AppBar>
          <Paper className={classes.root} style={{width:1400, marginLeft:80, marginTop:50}}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Company Name</TableCell>
                  <TableCell align="right">Backup Status</TableCell>
                  <TableCell align="right">Computers Count</TableCell>
                  <TableCell align="right">Users Count</TableCell>
                  <TableCell align="right">Servers Count</TableCell>
                  <TableCell align="right">Live Nodes</TableCell>
                  <TableCell align="right">Option</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.organizations.map(organization => (
                  <TableRow key={organization.id}>
                    <TableCell component="th" scope="row" key={organization.id}><a href='/' onClick={this.getOrganization} >{organization.company.name}</a></TableCell>
                    <TableCell align="right" key={organization.id}>{`${organization.backup.completionStatus}`}</TableCell>
                    <TableCell align="right" key={organization.id}>{`${organization.computers.length}`}</TableCell>
                    <TableCell align="right" key={organization.id}>{`${organization.users.length}`}</TableCell>
                    <TableCell align="right" key={organization.id}>{`${organization.servers.length}`}</TableCell>
                    <TableCell align="right" key={organization.id}>{`${organization.localAreaNetwork.liveNodes}`}</TableCell>
                    <TableCell align="right" key={organization.id}><button onClick={this.handleDelete}>Delete</button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
          </>
        );
    }
  
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);