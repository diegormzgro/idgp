import React from 'react'
import Table from './Table'
import  { useParams } from "react-router-dom";
import CesarArenas from './CesarArenas';

import { conferencia1, conferencia2, conferencia3, conferencia4, conferencia5, conferencia6, conferencia7 } from './conferencias';

import gerardocasamata from '../assets/cv/gerardocasamatagomez.jpeg'
import HeaderConf from './HeaderConf';
import HeaderCourse2 from './HeaderCourse2';
import TableWithOutTitle from './TableWithoutTitle';
import { ponentesAPM } from './ponentesArreglo';


function Topics(props) {
    

    let { id } = useParams();

  
    
    switch (id) {
        case '1':
            return (
                <div className="container">
                        <HeaderConf
                            date="Viernes 5 de noviembre"
                            horario="de 9 a 12 hrs y de 12 a 14 hrs"
                            modalidad="Virtual presencial por vía Zoom"
                            curso="Curso I"
                            ponente="Gerardo Casamata Gómez"
                            link="gerardocasamata"
                            tema="Entrega Recepción Municipal"


                         />
                        
                   
                    {
                        conferencia1.map( value =>(<Table array={value} />))
                    }
                    
                </div>
            )
        case '2': // foo is 0 so criteria met here so this block will run
            return (
                <div className="container">
                    <HeaderCourse2
                            date="24, 25, y 26 de octubre del 2024"
                            horario="A confirmar"
                            modalidad="Presencial"
                            curso="Curso II"
                            
                            tema="Administración Pública Municipal"


                         />
                    
                    
                    
                    {
                        conferencia2.map( value =>(<TableWithOutTitle title={"Temario:"} array={value} />))
                    }

                    { ponentesAPM.map( value =>(<TableWithOutTitle title={"Ponentes:"} array={value} />)) }
                    
                </div>
            )
        case '3': // no break statement in 'case 0:' so this case will run as well
            return (
                <div className="container">
                    <HeaderConf
                            date="Viernes 12 de noviembre"
                            horario="de 9 a 12 hrs y de 12 a 14 hrs"
                            modalidad="Virtual presencial por vía Zoom"
                            curso="Curso II"
                            ponente="Lic Gabriela Ocampo García"
                            link="gabrielaocampo"
                            tema="Habilidades Directivas en la Administración Pública Municipal"


                         />
                        
                    {
                       conferencia3.map( value =>(<Table array={value} />)) 
                    }
                    
                </div>
            )
        case '4':
            return (
                <div className="container">
                    <HeaderConf
                            date="Sábado 13 de noviembre"
                            horario="de 9 a 12 hrs y de 12 a 14 hrs"
                            modalidad="Virtual presencial por vía Zoom"
                            curso="Curso IV"
                            ponente="Jorge Michel Luna"
                            link="jorgeluna"
                            tema="Finanzas Públicas de los Municipios y de las Alcaldías "


                         />
                    
                    {
                        conferencia4.map( value =>(<Table array={value} />))
                    }
                    
                </div>
            )
        case '5':
            return (
                <div className="container">
                    <HeaderConf
                            date="Viernes 19 de noviembre"
                            horario="de 9 a 12 hrs y de 12 a 14 hrs"
                            modalidad="Virtual presencial por vía Zoom"
                            curso="Curso V"
                            ponente="Dr. Alfredo Javier Arias Casas y Dr. Arturo Vázquez Espinosa "
                            link="alfredojavier"
                            tema="Responsablidades Administrativas de los Servicios Públicos"


                         />
                    

                    {
                        conferencia5.map( value =>(<Table array={value} />))
                    }
                    
                </div>
            )
        case '6':
            return (
                <div className="container">
                    <HeaderConf
                            date="Sábado 20 de noviembre"
                            horario="de 9 a 12 hrs y de 12 a 14 hrs"
                            modalidad="Virtual presencial por vía Zoom"
                            curso="Curso VI"
                            ponente="Mtro. Vicente Loredo Méndez y Magistrado Jorge Alberto Estrada Cuevas"
                            link="vicenteloredo"
                            tema="Procedimientos de Investigacion y Sustanciación ante el OIC municipal"


                         />
                    
                    {
                        conferencia6.map( value =>(<Table array={value} />))
                    }
                    
                </div>
            )

        case '7':
            return (
                <div className="container">
                    <HeaderConf
                            date="Viernes 26 de noviembre"
                            horario="de 9 a 12 hrs"
                            modalidad="Virtual presencial por vía Zoom"
                            curso="Curso VII"
                            ponente="Mtro. Fredy Cesar Arenas Valdez"
                            link="fredycesar"
                            tema="Enfoque de Derechos y Seguridad Humana en la Promoción Municipal del Desarrollo"


                         />
                    
                        <h4 className="text-center fw-bold">
                        
                        
    
    
    
                        </h4>
                        {
                            conferencia7.map( value =>(<Table array={value} />))
                        }
                        
                 </div>
            )

        case 'CesarArenas':
            return(
                <CesarArenas />
            )

        case 'AlfredoJavier':
            return(
                <>
                </>
            )
        default:
            return (
                <div className="container">
                    <h3>Not found {id}</h3>
                    <h2>El evento no fue encontrado</h2>
                   
                </div>
            )
      }


 
    

    
}

export default Topics
