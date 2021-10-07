import React from 'react'
import Card from './Card'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';




import entregarecepcion from '../assets/entregarecepcion.jpg'
import ap from '../assets/ap.jpg'
import liderazgo from '../assets/liderazgo.jpg'
import cdmx from '../assets/apcdmx.png'

import responsabilidades from '../assets/responsabilidades2.png'
import oic from '../assets/oic.jpg'
import sustanciacion from '../assets/sustanciacion.jpg'
import seguridad from '../assets/seguridad.jpg'


import finanzas from '../assets/finanzas2.jpg'


function Eventos() {
    return (
        <div className="container py-5">
            <div>
               <h2 className="text-center mb-5">
               Cursos y Eventos
                </h2> 
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <Card image={entregarecepcion}
                    title="¿Qué es el proceso Entrega-Recepción?" 
                    description="Viernes 5 de noviembre
                    Horario: de 9 a 12 hrs y de 12 a 14 hrs
                    Virtual prescencial por vía Zoom
                    "
                    number="1"
                    button="Más información"
                     />
                </div>
                <div className="col">
                    
                <Card image={ap}
                title="Administración Pública Municipal" 
                description="Sábado 6 de noviembre.
                Horarios: de 9 a 12 hrs y de 12 a 14 hrs
                Virtual y presencial por vía Zoom
                Curso II
                "
                number="2"
                button="Más información"
                 />
                </div>
                <div 
                className="col">
                <Card image={liderazgo}
                title="Habilidades Directivas en la Administración Pública Municipal"
                description="viernes 12 de noviembre
                Horario: de 9 a 12 hrs y de 12 a 14 hrs
                Virtual y presencial por vía Zoom
                Curso III
                "
                number="3"
                button="Más información"
                 />
                </div>
                <div className="col">
                <Card image={finanzas}
                title="Finanzas públicas de los Municipios y de las Alcaldías" 
                description="Sábado 13 de noviembre
                Horario: de 9 a 12 hrs y de 12 a 14 hrs
                Virtual y presencial por vía Zoom
                Curso IV
                "
                number="4"
                button="Más información"
                 />
                </div>
                <div className="col">
                <Card image={responsabilidades}
                title="Responsabilidades Administrativas de los Servidores Públicos" 
                description="Viernes 19 de noviembre
                Horario: de 9 a 12 hrs y de 12 a 14 hrs
                Virtual y presencial por vía Zoom
                Curso V
                "
                number="5"
                button="Más información"
                 />
                </div>
                <div className="col">
                <Card image={sustanciacion}
                title="Procedimientos de investigación y sustanciación ante el OIC municipal" 
                description="Sábado 20 de noviembre
                Horario: de 9 a 12 hrs y de 12 a 14 hrs
                Virtual y presencial por vía Zoom
                Curso VI
                "
                number="6"
                button="Más información"
                 />
                </div>
                <div className="col">
                <Card image={seguridad}
                title="Enfoque de derechos y seguridad humana en la promoción municipal del desarrollo" 
                description="Viernes 26 de noviembre. 
                De 9 a 12 horas.
                Virtual presencial vía Zoom               
                "
                number="7"
                button="Más información"
                 />
                </div>
            </div>
        </div>
    )
}

export default Eventos
