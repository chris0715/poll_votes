import React from 'react'

const PollOption = ({handleChange ,name , id}) => (
  <div>
    <input onChange={handleChange} value={id} name='pollOptionId' type='radio' />{name}
  </div>
)

export default PollOption