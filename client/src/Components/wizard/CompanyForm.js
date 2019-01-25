import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class CompanyForm extends React.Component{
  state = {
    name:'',
    address1:'',
    address2:'',
    city:'',
    state:'',
    zip:'',
    country:''
  }

  handleChange = event => {
    var name = event.target.name
      this.setState({[name]: event.target.value})
  }

  render(){
    return (
      <>
        <Typography variant="h6" gutterBottom>
          Company Information
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <TextField
              required
              id="name"
              name="name"
              label="Company Name"
              fullWidth
              autoComplete="fname"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Address line 1"
              fullWidth
              autoComplete="billing address-line1"
              value={this.state.address1}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address2"
              name="address2"
              label="Address line 2"
              fullWidth
              autoComplete="billing address-line2"
              value={this.state.address2}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="billing address-level2"
              value={this.state.city}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
             id="state"
             name="state"
             label="State/Province/Region"
             fullWidth
             value={this.state.state}
             onChange={this.handleChange}
             />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="billing postal-code"
              value={this.state.zip}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              autoComplete="billing country"
              value={this.state.country}
              onChange={this.handleChange}
            />
            
          </Grid>
          <Grid item xs={12}>
              <Button
                          variant="contained"
                          color="primary"
                          onClick={() => {
                            this.props.addData(this.state)
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

export default CompanyForm;