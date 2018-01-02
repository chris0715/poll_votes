import React from 'react'

const List = (props) => {
  // debugger
  return (
    <table className='table'>
     <thead>
        <th>Title</th>
      </thead>  
      <tbody>
        {
          props.list.map(listItem => (
            <tr onClick={() => props.history.push('/create')}>
              {listItem.title}
            </tr>
          ))
        }
      </tbody>
  </table>
  )
}


export default List