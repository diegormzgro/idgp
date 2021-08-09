import React from 'react'


import capacitacion from '../assets/capacitacion1.png'
import auditoria from '../assets/auditoria1.jpg'
import encuestas from '../assets/encuestas1.jpg'
import investigacion from '../assets/investigacion1.jpg'
import taller from '../assets/taller1.png'



function Servicios() {
    return (
        <div className="container">
                    <h2 className="text-center">Servicios</h2>


            <div className="album py-5 bg-light">
        

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div className="col">
                <div className="card h-100 shadow-sm">
                    <img src={capacitacion} class="card-img-top" alt="..."/>  

                    <div className="card-body">
                        <h3>Capacitación a servidores públicos</h3>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-muted">9 mins</small>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card h-100 shadow-sm">
                    
                <img src={investigacion} class="card-img-top" alt="..."/> 

                    <div className="card-body">
                        <h3>Investigación</h3>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-muted">9 mins</small>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card h-100 shadow-sm">
                <img src={taller} class="card-img-top" alt="..."/> 

                    <div className="card-body">
                        <h3>Talleres y seminarios</h3>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-muted">9 mins</small>
                    </div>
                    </div>
                </div>
                </div>

                <div className="col">
                <div className="card h-100 shadow-sm">
                <img src={encuestas} class="card-img-top" alt="..."/> 
                    <div className="card-body">
                        <h3>Encuestas</h3>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-muted">9 mins</small>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card h-100 shadow-sm">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                    <div className="card-body">
                        <h3>Auditorias</h3>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-muted">9 mins</small>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card h-100 shadow-sm">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                    <div className="card-body">
                        <h3>Asesorias y evaluaciones</h3>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-muted">9 mins</small>
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
