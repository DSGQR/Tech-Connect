import React from 'react'
import './Home.css'
import Grid from '@material-ui/core/Grid';

import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

class Home extends React.Component {
  render() {
    return (
      <>
        <section className="intro">
          <div className="inner">
          <Grid container spacing={24} style={{marginLeft:0.1}}>
          <Grid item xs={8} md={12} lg={24} style={{marginTop:'100px'}} >
            <div className="content">
              <br />
              <h1>Tech Connect</h1>
              <h3>IT Documentation Like Nothing You've Seen Before</h3>
              <br />
              <br />
              <StyledFirebaseAuth uiConfig={this.props.uiConfig} firebaseAuth={firebase.auth()} />
              <br />
              <h3>Already Have an Account? Sign-in</h3>
            </div>
            </Grid>
            </Grid>
          </div>
        </section>
      </>
    )
  }
}

export default Home