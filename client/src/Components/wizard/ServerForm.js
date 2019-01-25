import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FAB from '../FAB'

class ServerForm extends React.Component {

  state = {
      servers: [{}],
      serverName: '',
      IPAddress: '',
    }

    handleChange = (event) => {
      var name = event.target.name
      this.setState({[name]: event.target.value})
    }

  updateState = () => {
    var servStat = false
    var servIP = this.state.IPAddress
    var servName = this.state.serverName
    servIP || servName === null ? servStat = false : servStat = true
    var joined = this.state.servers.concat({serverName: servName, IPAddress: servIP, completionStatus: servStat});
    this.setState({ servers: joined })
    console.log(`server name is ${servName} and server IP address is ${servIP}`)
    console.log(this.state)
  }

  newEntry = () => {
    
    console.log("new entry triggered")
  }

  render(){
    return (
      <>
        <Typography variant="h6" gutterBottom>
          Server Information
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={5}>
                <TextField
                required
                id="serverName"
                name="serverName"
                label="Server Name"
                fullWidth
                autoComplete="fname"
                value={this.state.serverName}
                onChange={this.handleChange}
              />
          </Grid>
          <Grid item xs={12} sm={5}>
              <TextField
              required
              id="IPAddress"
              name="IPAddress"
              label="Server IP Address"
              fullWidth
              autoComplete="fname"
              value={this.state.IPAddress}
              onChange={this.handleChange}
          />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button onClick={this.updateState}><FAB >New Entry</FAB></Button>
          </Grid>
          <Grid item xs={12}>
              <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    this.updateState(this.state.serverName,this.state.IPAddress)
                    this.props.addData(this.state)
                    console.log(this.state)
                    }
                  }>
                  Next
              </Button>
          </Grid>
        </Grid>
      </>
    );
  }
  
}

export default ServerForm;