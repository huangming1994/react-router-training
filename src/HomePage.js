import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

export function homePageReducer(state = '', action) {
  if (action.type === 'INFO_PAGE') {
    return action.payload
  }
  return state
}

export function homePageAction(payload) {
  return { type: 'HOME_PAGE', payload }
}

class HomePage extends Component {
  componentWillMount() {
    console.log('HomePage componentWillMount')
  }
  componentDidMount() {
    console.log('HomePage componentDidMount')
  }
  componentWillReceiveProps() {
    console.log('HomePage componentWillReceiveProps')
  }
  componentWillUnmount() {
    console.log('HomePage componentWillUnmount')
  }
  render() {
    return (
      <div>这是HomePage</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    page: state.homePage
  }
}

function mapDispatchToProps(dispatch) {
  return {
    homePageAction: compose(dispatch, homePageAction)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)