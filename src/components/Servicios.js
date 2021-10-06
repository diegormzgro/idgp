import React from 'react'

import {Link} from 'react-router-dom'


import capacitacion from '../assets/capacitacion1.png'
import auditoria from '../assets/auditoria1.jpg'
import encuestas from '../assets/encuestas1.jpg'
import encuestas2 from '../assets/encuestas2.jpg'
import investigacion from '../assets/investigacion1.jpg'
import taller from '../assets/taller1.png'



function Servicios() {
    return (
        <div className="container bg-altdark">
                    <h2 className="text-center">Servicios</h2>


            <div className="album py-5 bg-light">
        

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div className="col">
                <div className="card h-100 shadow-sm">
                    <img src={capacitacion} class="card-img-top" alt="..."/>  

                    <div className="card-body">
                        <h3>Capacitación a servidores públicos</h3>
                    <p className="card-text">El Programa de Capacitación del Servidor Público Local tiene como objetivo ampliar el criterio de las y los servidores públicos municipales, desarrollar su conocimientos, habilidades y aptitudes para incrementar la eficiencia en el ejercicio de la función pública.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        
                        
                        </div>
                       
                    </div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card h-100 shadow-sm">
                    
                <img src={investigacion} class="card-img-top" alt="..."/> 

                    <div className="card-body">
                        <h3>Investigación</h3>
                    <p className="card-text">Tenemos trabajos investigación en diferentes sectores de caracter público. Profesionales especializados en cada área le ayudan con su proyecto </p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        
                        
                        </div>
                       
                    </div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card h-100 shadow-sm">
                <img src={taller} class="card-img-top" alt="..."/> 

                    <div className="card-body">
                        <h3>Talleres, Cursos y seminarios</h3>
                    <p className="card-text">Ofrecemos un amplio portafolio de capacitaciones técnicas, diplomados y seminarios sobre temas como, gestión, gobernanza, liderazgo público y más.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="text-center">
                        <Link to="/cursos" >
                            <button type="button" className="btn btn btn-outline-primary">Más Información</button>
                        </Link> 
                        
                        
                        </div>
                       
                    </div>
                    </div>
                </div>
                </div>

                <div className="col">
                <div className="card h-100 shadow-sm">
                <img src={encuestas} class="card-img-top" alt="..."/> 
                    <div className="card-body">
                        <h3>Estudios de opinion</h3>
                    <p className="card-text">Recoge la opinión de una muestra de individuos representativa de la población.  miden el estado de opinión pública en relación con la situación política y económica del Estado y el País.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        
                        
                        </div>
                        
                    </div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card h-100 shadow-sm">
                        <img src={auditoria} class="card-img-top" alt="..."/> 
                    <div className="card-body">
                        <h3>Auditorias</h3>
                    <p className="card-text">Actividades de revisión mediante la cual puede verificarse el cumplimiento de un Sistema de Gestión establecido y la efectividad de dicho sistema y, en caso contrario, evaluar la necesidad de una mejora o de una acción correctiva.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        
                        </div>
                        
                    </div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card h-100 shadow-sm">
                <img src={encuestas2} class="card-img-top" alt="..."/> 
                    <div className="card-body">
                        <h3>Asesorias y evaluaciones</h3>
                    <p className="card-text">La evaluación del desempeño permite conocer y valorar de una manera objetiva el desempeño de cada colaborador de la organización y sirve de guía para mejorar y ampliar las competencias, posterior al análisis que coadyuve al desarrollo profesional.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        
                        
                        </div>
                        
                    </div>
                    </div>
                </div>
                </div>

                
               
                
            </div>
            
        </div>
    </div>
    )
}

export default Servicios
