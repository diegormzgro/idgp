import React from 'react'
import {Link} from 'react-router-dom'

function HeaderConf(props) {
    return (
        <>
        <h3 className="py-2 text-center fw-bold">
                    <div className="col">
                          {props.tema}
                    </div> 

                    
                </h3>
        <h4 className="">
                
                <div className="py-1 row justify-content-center">
                    <div className="col- col-sm-5">
                    {props.date}
                    </div>
                    <div className="col- col-sm-5">
                    {`Horario: ${props.horario}`}
                    </div>
                    
                </div>

                <div className="py-1 row justify-content-center">
                    <div className="col- col-sm-5">
                    {props.curso}
                    </div>
                    <div className="col- col-sm-5">
                     {props.modalidad}
                    </div>
                    
                </div>
                
            
               
                <div className="py-1 row justify-content-center">
                    <div className="col- col-sm-5">
                       Ponente:   {props.ponente}
                    </div> 

                    <div className="col- col-sm-5">
                        <Link to={props.link}>
                            <button type="button" class="btn btn-outline-primary">
                                Ver Reseña Curricular
                            </button>
                        </Link>
                            
                        
                    </div>
                </div>
                
                        
                       
                        

        </h4>
        </>
    )
}

export default HeaderConf
