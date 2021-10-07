import React from 'react'

function Table(props) {

    let array = [
        "1.1 Antecedentes",
        "1.2.- Marco Legal aplicable al proceso entrega-recepción",
        "1.3.- Generalidades ",
        "1.4.- Partes",
        "1.5.-Formalidades.",
        "1.6. Verificación de la Información",
        "1.7.- Formatos."
    ]
    console.log(array[0])
  
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>{props.array[0]}</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.array.slice(1).map((value)=>(
                        
                        <tr>
                            <td>{value}</td>
                        </tr>
                    ))
                    
                }
            </tbody>
        </table>
    )
}

export default Table
