import React from 'react'
import request from 'request-promise'

export default class CreatePoll extends React.Component  {

  constructor(props) {
    super(props)
    this.state = {
      options: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.addOption = this.addOption.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
handleChange({target: {name, value}}) {
  this.setState({[name]: value})
}

handleSubmit(e) {
  e.preventDefault()
  request({
    uri:'http://localhost:3500/api/poll',
    method: 'POST',
    body: {
      title: this.state.title,
      pollOptions: this.state.options
    },
    json: true
  })
  this.setState({title: '', options: []})
}
addOption() {
  const optionList = this.state.options
  optionList.push({name: this.state.currentOption})
  this.setState({options: optionList})
}
render() {
  return(
    <div className='row'>
        <div style={{margin: 'auto', marginTop: 50}} className='col-md-6'>
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input value={this.state.title} onChange={this.handleChange} name='title' className='form-control' />
          </div>
          {this.state.options.map(item => (
            <span className='badge badge-secondary'>{item.name}</span>
          ))}
          <div className='form-group'>
            <label htmlFor='title'>Options</label>
            <input onChange={this.handleChange} name='currentOption' className='form-control' />
            <button onClick={this.addOption} className='btn'>Add</button>
          </div>
          <button className='btn' type='submit' onClick={this.handleSubmit}>Create Poll </button>
        </div>
    </div>
    )
  
}
}