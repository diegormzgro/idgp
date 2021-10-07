import React from 'react'

import {Link} from 'react-router-dom'

import ap from '../assets/ap5.jpg'
import apmobile from '../assets/ap5mobile.jpg'
import acapulcomobile from '../assets/acapulcomobile.jpg'
import conferencia from '../assets/conferencia2.jpg'

function Carousel2() {
    return (
        <div>
                <div id="carouselExampleIndicators" class="d-block d-sm-none carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src={apmobile} class="d-block w-100" alt="..."/>
                            <div className="container">
                                <div className="carousel-caption text-start">
                                    <h1>Ciclo de cursos temáticos sobre la gestión pública municipal </h1>
                                    <p className="mb-1">Viernes y Sábados del 5 al 26 de noviembre de 9 a 14 horas</p>
                                    <p>
                                    <Link to="/cursos" >
                                    <button className="btn btn-lg btn-primary" >Más información</button>
                                    </Link> 
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                                <rect width="100%" height="100%" fill="#a33308"/>
                            </svg>
                        <div className="container">
                                <div className="carousel-caption text-start">
                                    <h1>Congreso internacional de gestion publica, marzo 2022, Acapulco Guerrero  </h1>
                                    <p className="mb-1">Proximamente informes</p>
                                    
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>


                <div id="carouselExampleIndicators" class="d-none d-sm-block carousel slide" data-bs-ride="carousel">
                    
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src={ap} class="d-block w-100" alt="..."/>
                        <div className="container">
                                <div className="carousel-caption text-start">
                                    <h1>Ciclo de cursos temáticos sobre la gestión pública municipal </h1>
                                    <p className="mb-1">Viernes 22 y sabado 23 de octubre. De 10 a 13 horas.</p>
                                    <p>
                                    <Link to="/cursos" >
                                    <button className="btn btn-lg btn-primary" >Más información</button>
                                    </Link> 
                                    </p>
                                </div>
                            </div>
                        </div>
                       
                        
                    </div>
                    
                </div>
            
        </div>
    )
}

export default Carousel2
