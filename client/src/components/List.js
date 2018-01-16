import React from 'react'

const List = (props) => {
  // debugger
  return (
    <table className='table'>
     <thead>
       <tr>
        <th>Title</th>
       </tr>
      </thead>  
      <tbody className='list-hover'>
        {
          props.list.map((listItem, index) => (
            <tr key={index} onClick={() => props.history.push(`/poll/${listItem.id}`)}>
              <td>{listItem.title}</td>
            </tr>
          ))
        }
      </tbody>
  </table>
  )
}


export default List