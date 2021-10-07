import React from 'react'
import '../styles/integrantes.css'

import fredy from '../assets/integrantes/fredycesar.jpeg'
import loredo from '../assets/integrantes/josevicenteresized.jpeg'
import alfredo from '../assets/integrantes/alfredo.jpeg'
import Card from './Card'


function Profesores() {
    return (
        <div className="container py-5">
            <div>
               <h2 className="text-center mb-5">
                        Intengrantes
                </h2> 
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col integrante">
                <Card image={fredy}
                    title="Fredy Cesar"
                    button="Ver Perfil"
                    number="FredyCesar"/>
                </div>
                <div className="col integrante">
                <Card image={loredo}
                    title="José Vicente Loredo Méndez"
                    button="Ver Perfil"
                    number="JoseVicente"/>
                </div>
                <div className="col">
                <Card image={alfredo}
                    title="José Vicente Loredo Méndez"
                    button="Ver Perfil"/>
                </div>
                <div className="col integrante">
                <Card image={loredo}
                    title="Cesar Arenas"
                    button="Ver Perfil"
                    number="CesarArenas"/>
                </div>
                
            </div>
                
        </div>
    )
}

export default Profesores
