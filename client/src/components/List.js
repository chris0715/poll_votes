import React from 'react'

const List = ({list}) => (
  <table className='table'>
     <thead>
        <th>Title</th>
      </thead>  
      <tbody>
        {list.map(data => (
          <tr>
            aa
          </tr>
        ))}
      </tbody>
  </table>
)

export default List