import React, { Component } from 'react'

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

export default InfoPage