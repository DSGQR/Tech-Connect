import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



class EquipmentForm extends React.Component {

  state = {
      computers: [
        {computerName: '', computerIPAddress: ''}
      ],
      serverName:'',
      serverIPAddress:'',
      firewallName:'',
      firewallType:'',
      firewallLANIPAddress:'',
      firewallWANIPAddress:'',
      backupType:'',
      backupFrequency:''
  }

  handleChange = (event, index) => {
    var name = event.target.name
    var group = event.target.getAttribute("group")
    var newAr = this.state[group].concat([]);
    newAr[index][name] = event.target.value;
    console.log(`${group}, ${name}: ${event.target.value}`)
    this.setState({[group]: newAr})
  }

  addComputer = () => {
    var joined = this.state.computers.concat({computerName: '', computerIPAddress: ''});
    this.setState({ computers: joined })
    // this.setState({computers:[this.state.computers, {computerName: '', computerIPAddress: ''} ]})
  }

  render(){
    return (
      <>
        <Typography variant="h6" gutterBottom>
          Equipment Information
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={5}>
            {this.state.computers.map((e,i) => {
              return <TextField
                required
                id="computerName"
                inputProps={{group: "computers"}}
                name="computerName"
                label="Computer Name"
                fullWidth
                autoComplete="fname"
                value={this.state.computers[i].computerName}
                onChange={(e) => this.handleChange(e, i)}
              />
            })}
          </Grid>
          <Grid item xs={12} sm={5}>
          {this.state.computers.map((e,i) => {
              return <TextField
              required
              id="computerIPAddress"
              inputProps={{group: "computers"}}
              name="computerIPAddress"
              label="Computer IP Address"
              fullWidth
              autoComplete="fname"
              value={this.state.computers[i].computerIPAddress}
              onChange={(e) => this.handleChange(e, i)}
          />})}
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button onClick={this.addComputer}>Add Computer</Button>
          </Grid>
          <Grid item xs={12} sm={6}>
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
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="serverIPAddress"
              name="serverIPAddress"
              label="Server IP Address"
              fullWidth
              autoComplete="fname"
              value={this.state.serverIPAddress}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
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
          <Grid item xs={12} sm={6}>
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
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firewallLANIPAddress"
              name="firewallLANIPAddress"
              label="LAN IP Address"
              fullWidth
              autoComplete="fname"
              value={this.state.firewallLANIPAddress}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firewallWANIPAddress"
              name="firewallWANIPAddress"
              label="WAN IP Address"
              fullWidth
              autoComplete="fname"
              value={this.state.firewallWANIPAddress}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="backupType"
              name="backupType"
              label="Backup Type"
              fullWidth
              autoComplete="fname"
              value={this.state.backupType}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="backupFrequency"
              name="backupFrequency"
              label="Backup Frequency"
              fullWidth
              autoComplete="fname"
              value={this.state.backupFrequency}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
              <Button
                          variant="contained"
                          color="primary"
                          onClick={() => {
                            this.props.addData(this.state)
                            // console.log(this.state)
                          }
                          }
                >
                          Next
              </Button>
          </Grid>
        </Grid>
      </>
    );
  }
  
}

export default EquipmentForm;