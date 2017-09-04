import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

export function infoPageReducer(state = '', action) {
  if (action.type === 'INFO_PAGE') {
    return action.payload
  }
  return state
}

function infoPageAction(payload) {
  return { type: 'HOME_PAGE', payload }
}

class InfoPage extends Component {
  componentWillMount() {
    console.log('InfoPage componentWillMount')
  }
  componentDidMount() {
    console.log('InfoPage componentDidMount')
  }
  componentWillReceiveProps() {
    console.log('InfoPage componentWillReceiveProps')
  }
  componentWillUnmount() {
    console.log('InfoPage componentWillUnmount')
  }
  render() {
    return (
      <div>这是InfoPage</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    page: state.infoPage
  }
}

function mapDispatchToProps(dispatch) {
  return {
    infoPageAction: compose(dispatch, infoPageAction)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoPage)