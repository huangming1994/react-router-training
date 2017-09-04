import React, { Component } from 'react'

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

export default HomePage