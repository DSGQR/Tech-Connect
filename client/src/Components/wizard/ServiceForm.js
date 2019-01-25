import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class ServiceForm extends React.Component {

  state = {
      internetProvider:'',
      internetIPAdrress:'',
      uploadSpeed:'',
      downloadSpeed:'',
      LANSubnet:'',
      liveNodes:'',
      backupType:'',
      backupFrequency:''
  }

  handleChange = (event) => {
    var name = event.target.name
    this.setState({[name]: event.target.value})
  }

  render(){
    return (
      <>
        <Typography variant="h6" gutterBottom>
          Service Information
        </Typography>
        <Grid container spacing={24}>
          
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="internetProvider"
              name="internetProvider"
              label="Internet Provider"
              fullWidth
              autoComplete="fname"
              value={this.state.internetProvider}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="internetIPAdrress"
              name="internetIPAdrress"
              label="Internet IP Address"
              fullWidth
              autoComplete="fname"
              value={this.state.internetIPAdrress}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="uploadSpeed"
              name="uploadSpeed"
              label="Upload Speed"
              fullWidth
              autoComplete="fname"
              value={this.state.uploadSpeed}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="downloadSpeed"
              name="downloadSpeed"
              label="Download Speed"
              fullWidth
              autoComplete="fname"
              value={this.state.downloadSpeed}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="LANSubnet"
              name="LANSubnet"
              label="LAN Subnet"
              fullWidth
              autoComplete="fname"
              value={this.state.LANSubnet}
              onChange={this.handleChange}

            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="liveNodes"
              name="liveNodes"
              label="Live Nodes"
              fullWidth
              autoComplete="fname"
              value={this.state.liveNodes}
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

export default ServiceForm;