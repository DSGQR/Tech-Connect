import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CompanyForm from './CompanyForm';
import UserForm from './UserForm'
import ServiceForm from './ServiceForm';
import ComputerForm from './ComputerForm'
import ServerForm from './ServerForm'
import FirewallForm from './FirewallForm'
import FileShare from './FileShare'


const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(1000 + theme.spacing.unit * 2 * 2)]: {
      width: 1000,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
});

const steps = ['Company Info', 'User Info','Computer Info', 'Server Info', 'Firewall Info', 'File Share Info','Service Info'];

class Checkout extends React.Component {
  state = {
    activeStep: 0,
    backup: {
          backupType: '',
          frequency: '',
          completionStatus: ''
      },
    localAreaNetwork: {
          subnet: '',
          liveNodes: '',
          completionStatus: '' 
      },
    company:{
        name: '',
        address1:'',
        address2:'',
        city:'',
        state: '',
        zip: '',
        country:''
      },
    computers: [
          {
            computerName: '',
            IPAddress: '',
            completionStatus: ''
          }
      ],
    servers: [
          {
             
            serverName: '',
            IPAddress: '',
            completionStatus: ''
          }
      ],
    users: [
          {
            firstName: '',
            lastName:'',
            userName:'',
            emailAddress:'',
            completionStatus: ''
          }
        ],
    fileShares: [
          {
            shareName: '',
            sharePath: '',
            completionStatus: ''
          }
      ],
    firewalls: [
          {
            name: '',
            firewallType: '',
            LANIPAddress: '',
            WANIPAddress: '',
            completionStatus: ''
          }
      ],
    internetProviders: [
        {
          name: '',
          uploadSpeed: '',
          downloadSpeed: '',
          IPAddress: '',
          completionStatus: ''
        }
      ]
}

  getStepContent = (step) => {
    switch (step) {
      case 0:
        return (<CompanyForm addData={(e) => {
          console.log(e)
          this.setState({
            company: e,
            activeStep: this.state.activeStep + 1
          });
        }}
        />);
        case 1:
        return (<UserForm addData={(e) => {
          console.log(this.state)
          this.setState({
            users: e,
            activeStep: this.state.activeStep + 1
          });
        }}
      />);
      case 2:
        return (<ComputerForm addData={(e) => {
          this.setState({
            computers: e,
            activeStep: this.state.activeStep + 1
          });
        }}
      />);
      case 3:
        return (<ServerForm addData={(e) => {
          this.setState({
            servers: e,
            activeStep: this.state.activeStep + 1
          });
        }}
      />);
      case 4:
        return (<FirewallForm addData={(e) => {
          this.setState({
            firewalls: e,
            activeStep: this.state.activeStep + 1
          });
        }}
      />);
      case 5:
      return (<FileShare addData={(e) => {
        this.setState({
          fileShares: e,
          activeStep: this.state.activeStep + 1
        });
      }}
    />);
      case 6:
        return (<ServiceForm addData={(e) => {
          this.setState({
            service: e,
            activeStep: this.state.activeStep + 1
          });
        }}
      />);
      default:
        throw new Error('Unknown step');
    }
  }

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;

    return (
      <>
        <CssBaseline />
        <AppBar position="absolute" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Onboarding New Client Wizard
            </Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Onboard New Client 
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <>
                  <Typography variant="h5" gutterBottom>
                    Welcome Aboard 
                  </Typography>
                  <Typography variant="subtitle1">
                    Company Information Was Successfully Submitted!
                    Please Check The "Organizations" Tab For Verificaiton.
                  </Typography>
                </>
              ) : (
                <>
                  {this.getStepContent(activeStep)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={this.handleBack} className={classes.button}>
                        Back
                      </Button>
                    )}
                  </div>
                </>
              )}
            </React.Fragment>
          </Paper>
        </main>
      </>
    );
  }
}

Checkout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Checkout);
