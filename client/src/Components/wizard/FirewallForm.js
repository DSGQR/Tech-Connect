import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FAB from '../FAB'

class FirewallForm extends React.Component {

  state = {
      firewalls: [{}],
      firewallName: '',
      firewallType: '',
      LANIPAddress: '',
      WANIPAddress: ''
    }

    handleChange = (event) => {
      var name = event.target.name
      this.setState({[name]: event.target.value})
    }

  updateState = () => {
    var firewallStat = false
    var firewallIP = this.state.IPAddress
    var firewallName = this.state.firewallName
    firewallIP || firewallName === null ? firewallStat = false : firewallStat = true
    var joined = this.state.firewalls.concat({firewallName: firewallName, IPAddress: firewallIP, completionStatus: firewallStat});
    this.setState({ firewalls: joined })
    console.log(`firewall name is ${firewallName} and firewall IP address is ${firewallIP}`)
    console.log(this.state)
  }

  newEntry = () => {
    
    console.log("new entry triggered")
  }

  render(){
    return (
      <>
        <Typography variant="h6" gutterBottom>
        firewall Information
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={5}>
                <TextField
                required
                id="firewallName"
                name="firewallName"
                label="Firewall Name"
                fullWidth
                autoComplete="fname"
                value={this.state.firewallName}
                onChange={this.handleChange}
              />
          </Grid>
          <Grid item xs={12} sm={5}>
                <TextField
                required
                id="firewallType"
                name="firewallType"
                label="Firewall Type"
                fullWidth
                autoComplete="fname"
                value={this.state.firewallType}
                onChange={this.handleChange}
              />
          </Grid>
          <Grid item xs={12} sm={5}>
              <TextField
              required
              id="LANIPAddress"
              name="LANIPAddress"
              label="Firewall LAN IP Address"
              fullWidth
              autoComplete="fname"
              value={this.state.LANIPAddress}
              onChange={this.handleChange}
          />
          </Grid>
          <Grid item xs={12} sm={5}>
              <TextField
              required
              id="WANIPAddress"
              name="WANIPAddress"
              label="Firewall WAN IP Address"
              fullWidth
              autoComplete="fname"
              value={this.state.WANIPAddress}
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

export default FirewallForm;