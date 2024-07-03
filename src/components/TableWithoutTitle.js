import React from 'react'

function TableWithOutTitle(props) {

  
  
  
    return (

        <div className='mt-5'>
            <h4 className='fs-3'>
            {props.title}
        </h4>
        <table className="table table-striped">
            
            <tbody>
                {
                    props.array.map((value)=>(
                        
                        <tr>
                            <td>{value}</td>
                        </tr>
                    ))
                    
                }
            </tbody>
        </table>

        </div>
        
        
        
    )
}

export default TableWithOutTitle
