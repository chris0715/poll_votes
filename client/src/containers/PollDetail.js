import React from 'react'
import PollDetailComponent from '../components/PollDetail'
import request from 'request-promise'
import PollOption from '../components/PollOption'

class PollDetail extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '',
      pollOptions: [],
      pollOptionId: null,
      voted: false
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params
    request({
      uri: `http://localhost:3500/api/poll/${id}`,
      method: 'GET',
      json: true
    })
    .then(res => {
      this.setState(res)
    })
  }

  handleChange({target:{ name, value}}) {
    this.setState({[name]: value})
  }

  vote(e) {
    e.preventDefault()
    console.log(e.target)
    const formData = new FormData(e.target)
    request({
      uri: 'http://localhost:3500/api/poll/vote',
      json: true,
      method: 'POST',
      body: {pollOptionId: this.state.pollOptionId}
    })
    this.setState({voted: true})
  }

  render() {
    return (
      <div>
        <PollDetailComponent voted={this.state.voted} handleChange={this.handleChange.bind(this)} handleSubmit={this.vote.bind(this)} pollOptions={this.state.pollOptions} title={this.state.title} />
      </div>
      
    )
  }
}

export default PollDetail