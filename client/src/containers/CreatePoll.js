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
      options: this.state.options},
    json: true
  })
  this.setState({title: '', options: []})
}
addOption() {
  const optionList = this.state.options
  optionList.push(this.state.currentOption)
  this.setState({options: optionList})
}
render() {
  return(
    <div>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input value={this.state.title} onChange={this.handleChange} name='title' className='form-control' />
        </div>
        {this.state.options.map(item => (
          <span className='badge badge-secondary'>{item}</span>
        ))}
        <div className='form-group'>
          <label htmlFor='title'>Options</label>
          <input onChange={this.handleChange} name='currentOption' className='form-control' />
          <button onClick={this.addOption} className='btn'>Add</button>
        </div>
        <button type='submit' onClick={this.handleSubmit}>Create Poll </button>
    </div>
    )
  
}
}