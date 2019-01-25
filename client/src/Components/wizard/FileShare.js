import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FAB from '../FAB'

class FileShareForm extends React.Component {

  state = {
      fileShares: [{}],
      filePath:'',
      sharePath: ''
    }

    handleChange = (event) => {
      var name = event.target.name
      this.setState({[name]: event.target.value})
    }

  updateState = () => {
    // var userStat = false
    // var userIP = this.state.IPAddress
    // var firewallName = this.state.firewallName
    // firewallIP || firewallName === null ? firewallStat = false : firewallStat = true
    // var joined = this.state.firewalls.concat({firewallName: firewallName, IPAddress: firewallIP, completionStatus: firewallStat});
    // this.setState({ firewalls: joined })
    // console.log(`firewall name is ${firewallName} and firewall IP address is ${firewallIP}`)
    // console.log(this.state)
  }

  newEntry = () => {
    
    console.log("new entry triggered")
  }

  render(){
    return (
      <>
        <Typography variant="h6" gutterBottom>
        File Share Information
        </Typography>
        <Grid container spacing={24}>
        <Grid item xs={12} sm={5}>
                <TextField
                required
                id="filePath"
                name="filePath"
                label="File Path"
                fullWidth
                autoComplete="fpath"
                value={this.state.filePath}
                onChange={this.handleChange}
              />
          </Grid>
          <Grid item xs={12} sm={5}>
                <TextField
                required
                id="sharePath"
                name="sharePath"
                label="Share Path"
                fullWidth
                autoComplete="spath"
                value={this.state.sharePath}
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

export default FileShareForm;