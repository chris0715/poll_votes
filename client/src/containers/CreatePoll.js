import React from 'react'


export default class CreatePoll extends React.Component  {

  constructor(props) {
    super(props)
    this.state = {
      options: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.addOption = this.addOption.bind(this)
  }
handleChange({target: {name, value}}) {
  this.setState({[name]: value})
}

handleSubmit(e) {
  e.preventDefault()

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
          <input onChange={this.handleChange} name='title' className='form-control' />
        </div>
        {this.state.options.map(item => (
          <span className='badge badge-secondary'>{item}</span>
        ))}
        <div className='form-group'>
          <label htmlFor='title'>Options</label>
          <input onChange={this.handleChange} name='currentOption' className='form-control' />
          <button onClick={this.addOption} className='btn'>Add</button>
        </div>
        <button type='submit'>Create Poll </button>
    </div>
    )
  
}
}