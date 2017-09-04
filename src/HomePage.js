import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { history } from './index'

export function homePageReducer(state = 'homePage', action) {
  if (action.type === 'HOME_PAGE') {
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
      <div
        onClick={() => {history.push('/infopage')}}
      >
        {`这是${this.props.page}`}
      </div>
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