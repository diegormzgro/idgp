import React from 'react'
import '../styles/carousel.css'

import { Link } from 'react-router-dom'

import salon from '../assets/integrantes/integrantes3.jpeg'
import conferencia from '../assets/conferencia2.jpg'
import liderazgo from '../assets/liderazgo3.jpg'
import ap from '../assets/ap5.jpg'
import apmobile from '../assets/ap5mobile.jpg'
import acapulcomobile from '../assets/acapulcomobile.jpg'
import large from '../assets/large.jpg'
import auditoria from '../assets/auditoria1.jpg'
import encuestas from '../assets/encuestas1.jpg'
import encuestas2 from '../assets/encuestas2.jpg'
import investigacion from '../assets/investigacion1.jpg'
import taller from '../assets/taller1.png'

function Carousel() {
    return (
    <div>
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                <div className="carousel-item active">
                  {/*  <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <rect width="100%" height="100%" fill="#777"/>
                    </svg>
                    */} 
                    <img src={ap} width="100%" height="100%" className=""/>
                    
                    
                    <div className="container">
                    <div className="carousel-caption text-start">
                        <h2 className="display-1">Cicslo de cursos temáticos sobre la gestión pública municipal </h2>
                        <h3 className="mb-1">24, 25 y 26 de octubre del 2024</h3>
                        <p>
                        <Link to="/cursos" >
                        <button className="btn btn-lg btn-primary" >Más información</button>
                        </Link> 
                        </p>
                    </div>
                    </div>
                </div>
                {
                    /*
                                <div className="carousel-item">
                                <img src={ap} width="100%" height="100%" className=""/>
                                <div className="container">
                                <div className="carousel-caption">
                                    <h1>Información al 5534314156 / 7351884915</h1>
                                    <p className="mb-1">contacto@idgp.mx</p>
                                    <p><a className="btn btn-lg btn-primary" href="#">Más información</a></p>
                                </div>
                                </div>
                            </div>

                    */
                }
                
                <div className="carousel-item">
                     <img src={conferencia} width="100%" height="100%" className=""/>

                    <div className="container">
                    <div className="carousel-caption text-end">
                        <h1 className="display-2">Congreso internacional de gestion publica </h1>
                        <p>Próximamente.</p>
                        
                    </div>
                    </div>
                </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
            </div>
    </div>
    )
}

export default Carousel
