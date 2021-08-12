import React from 'react'
import '../styles/carousel.css'

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
                    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>

                    <div className="container">
                    <div className="carousel-caption text-start">
                        <h1>Curso de capacitación a funcionarios públicos</h1>
                        <p className="mb-1">Incia el 23 de Octubre, certificado por la sep</p>
                        <p><button className="btn btn-lg btn-primary" href="#">Inscríbete hoy</button></p>
                    </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>

                    <div className="container">
                    <div className="carousel-caption">
                        <h1>Conocee nuestros últimas encuestas</h1>
                        <p className="mb-1">Sobre las elecciones en Morelos 2021</p>
                        <p><a className="btn btn-lg btn-primary" href="#">Más información</a></p>
                    </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>

                    <div className="container">
                    <div className="carousel-caption text-end">
                        <h1>Diplomado sobre gestion gubernamental</h1>
                        <p>Incia el 16 de agosto, otorgamiento de certificado</p>
                        <p><a className="btn btn-lg btn-primary" href="#">Inscripciones</a></p>
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
