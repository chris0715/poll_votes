import React from 'react'
import PollOption from './PollOption'

const PollDetail = ({voted, handleChange, handleSubmit, title, pollOptions}) => {
  return (
    <div className='row'>
      <div className='col-md-6'>
      <h2>Current Votting stats</h2>
      <table className='table'>
        <tr>
          <th>Option</th>
          <th>%</th>
        </tr>
        { pollOptions.map(option => (
          <tr>
          <td>{option.name}</td>
          <td>{option.count}</td>
          </tr>
        ))}
        </table>
      </div>
    </div>
  )
  /* if (voted) {
    return (
      <h1>Thank you for voting</h1>
    )
  }
  return (
    <div className='row'>
  <div className='col-md-6'>
    <h2>Current Votting stats</h2>
    <table className='table'>
        <tr>
          <th>Option</th>
          <th>%</th>
        </tr>
        { pollOptions.map(option => (
          <tr>
          <td>{option.name}</td>
          <td>{option.count}</td>
          </tr>
        ))}

    </table>
  </div>
    <form className='col-md-6' onSubmit={handleSubmit}>
      <h1>{title}</h1>
      
      {pollOptions.map(option => (
          <PollOption handleChange={handleChange} key={option.id} {...option} />
        ))}
      <button>Submit</button>
    </form>
    
  </div>
) */
  }

export default PollDetail