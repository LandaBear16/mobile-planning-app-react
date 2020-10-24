import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import LoggedInRoutes from './logged-in-routes'


class Routes extends Component {
  

  render () {
    
    return (<LoggedInRoutes /> )
  }
}

export default withRouter(
  connect(
    (state) => ({
    
    }),
    (dispatch) => ({
      
    })
  )(Routes)
)
