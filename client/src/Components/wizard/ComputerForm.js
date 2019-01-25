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

    // handleChange = (event) => {
    //   var name = event.target.name
    //   this.setState({[name]: event.target.value})
    // }

  handleChange = (event, index) => {
    var name = event.target.name
    var group = event.target.getAttribute("group")
    var newAr = this.state[group].concat([]);
    newAr[index][name] = event.target.value;
    console.log(`${group}, ${name}: ${event.target.value}`)
    this.setState({[group]: newAr})
  }

  addComputer = () => {
    var joined = this.state.computers.concat({name: '', computerIPAddress: ''});
    this.setState({ computers: joined })
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

  render() {
    return (
      <>
        <Typography variant="h6" gutterBottom>
          Computer Information
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
            <Button onClick={this.addComputer}><FAB >New Entry</FAB></Button>
          </Grid>
          <Grid item xs={12}>
              <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    this.updateState(this.state.computerName,this.state.IPAddress)
                    this.props.addData(this.state)
                    
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