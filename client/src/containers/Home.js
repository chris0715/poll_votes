import React from 'react'
import List from '../components/List'
import request from 'request-promise'
class Home extends React.Component {
  
  constructor() {
    super()
    this.state = {
      list: []
    }
  }
  componentDidMount() {
    request({
      uri: 'http://localhost:3500/api/poll',
      method: 'GET',
      json: true
    })
    .then(data => {
      this.setState({list: data})
    })
  }
  render() {
    return (
      <List history={this.props.history} list={this.state.list} />
    )
  }
}

export default Home