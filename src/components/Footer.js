import React, {useState} from 'react'
import "../styles/footer.css"
import {Link} from 'react-router-dom'
import { IconContext } from "react-icons";

import { FaFacebook, FaPhoneAlt, FaWhatsapp, FaTwitter, FaYoutube } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

function Footer() {
    const [screensize, setscreensize] = useState("lg")
    return (

    <section className="bg-altdark">
        <footer className="container2 container md sm">
           
           <div className="item m-4 mt-3 mb-5">
               <h2>Conócenos</h2>

               <p className="mt-5">
               Desarrollo de la Gestión Pública A.C, 
               es una organización sin fin de lucro, 
               su tarea fundamental es potenciar  la 
               suma de voluntades para promover la 
               efectividad en la gestión pública; 
               </p>
            </div> 
            
           <div className="item ar m-4 mt-3 mb-5">
                <h2>Acceso rápido</h2>

              
                    <Link to="/">Inicio</Link>
                    <Link to="/mision" >Mision</Link>
                    <Link to="/servicios" >Servicios</Link>
                    <Link to="/publicaciones" >Publicaciones</Link>
                    <Link to="/contacto" >Contacto</Link>
               
           </div> 
           <div className="item contacto m-4 mt-3 mb-5">
                <h2>Contacto</h2>

                <IconContext.Provider value={{ size:"1.5em"}} >
                <div className="inner-contacto">
                    <div className="item-a mt-3">
                        <div className="me-3">
                        <FaPhoneAlt/>
                        </div>
                         
                         735 188 49 15 
                         
                        
                    </div>
                    
                    <div className="item-c mt-3">
                        <div className="me-3">
                        <GrMail/>
                        </div>
                        <div>idgpnegocios@idgp.mx</div>
                        
                         
                        
                    </div>
                    
                    <div className="item-e mt-3">
                        <div className="me-3">
                        <FaWhatsapp/> 
                        </div>
                        735 188 49 15
                    </div>
                    
                    <div className="item-redes mt-3">
                        <div className="me-5">
                        <FaFacebook/> 
                        </div>
                        <div className="me-5">
                        <FaTwitter/>
                        </div>
                        <div className="">
                        <FaYoutube/>
                        </div>
                        
                        
                        
                    </div>
                    
                </div>
                </IconContext.Provider>
                    
                    

            </div> 
           <div className="suscribete mt-3 mb-5">
                <h2>Suscríbete</h2>
                <div className="justify mb-3">
                Suscríbete para recibir nuestro contenido, publicaciones, y eventos de la asociación 
                
                </div>
                
                <form className="text-justify">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control m" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                
            </div> 
           

        </footer>
    </section>
    )
}

export default Footer
