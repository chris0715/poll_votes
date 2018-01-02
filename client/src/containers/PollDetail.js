import React from 'react'
import PollDetailComponent from '../components/PollDetail'
import request from 'request-promise'

class PollDetail extends React.Component {
  constructor() {
    super()
    this.state = {
      title: ''
    }
  }

  componentDidMount() {
    const {id} = this.props.match.params
    request({
      uri: `http://localhost:3500/api/poll/${id}`,
      method: 'POST',
      json: true
    })
    .then(res => {
      this.setState(res)
    })
  }

  vote() {

  }

  render() {
    return (
      <PollDetailComponent title />
    )
  }
}

export default PollDetail