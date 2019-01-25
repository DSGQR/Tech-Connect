import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FAB from '../FAB'

class ComputerForm extends React.Component {

  state = {
      computers: [{}],
      computerName: '',
      IPAddress: '',
    }

    handleChange = (event) => {
      var name = event.target.name
      this.setState({[name]: event.target.value})
    }

  updateState = () => {
    var compStat = false
    var compIP = this.state.IPAddress
    var compName = this.state.computerName
    compIP || compName === null ? compStat = false : compStat = true
    var joined = this.state.computers.concat({computerName: compName, IPAddress: compIP, completionStatus: compStat});
    this.setState({ computers: joined })
    console.log(`Computer name is ${compName} and computer IP address is ${compIP}`)
    console.log(this.state)
  }

  newEntry = () => {
    
    console.log("new entry triggered")
  }

  render(){
    return (
      <>
        <Typography variant="h6" gutterBottom>
          Computer Information
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={5}>
                <TextField
                required
                id="computerName"
                name="computerName"
                label="Computer Name"
                fullWidth
                autoComplete="fname"
                value={this.state.computerName}
                onChange={this.handleChange}
              />
          </Grid>
          <Grid item xs={12} sm={5}>
              <TextField
              required
              id="IPAddress"
              name="IPAddress"
              label="Computer IP Address"
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
                    this.updateState(this.state.computerName,this.state.IPAddress)
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

export default ComputerForm;