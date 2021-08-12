import React from 'react'

import contacto from '../assets/contacto.png'

function Contacto() {
    return (
        <>
        <div className="container bg-light">
    <div className="row py-5">
      <div className="col-xl-6 col-md-12 col-sm-12 col-xs-12 align-self-center">
        <div className="row">
          <img src={contacto} className="img-fluid" alt="..."/>
        </div>
        
        
      </div>

      <div className="col-xl-6 col-md-12 col-sm-12 col-xs-12 mt-3">
        <div className="card card-body">
          <form id="contact-form" name="contact-form" action="php/sendinfo.php" method="POST">
            <div className="mb-3">
              <h4 className="mb-3">Solicita Información</h4>
              <select id="carrera" name="carrera" className="form-select" aria-label="Default select example">
                <option selected value="0">Talleres y Seminarios</option>
                <option value="1">Auditorias</option>
                <option value="2">Encuestas</option>
                <option value="3">Capacitación a servidores públicos</option>
                <option value="4">Asesorias y evaluaciones</option>
               
              </select>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label className="form-label">Nombre(s)</label>
                <input id="name" name="name" type="text" className="form-control" placeholder="First name" aria-label="First name"/>
              </div>
              <div className="col">
                <label className="form-label">Apellidos</label>
                <input id="lastname" name="lastname" type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email" id="email" placeholder="example@mail.com" aria-describedby="emailHelp"/>
              </div>
              <div className="col">
                <label className="form-label">Género</label> <br/>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" id="sexo" name="sexo" value="H"/>
                  <label className="form-check-label" for="inlineRadio1">Hombre</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio"  id="sexo" name="sexo" value="M"/>
                  <label className="form-check-label" for="inlineRadio2">Mujer</label>
                </div>
                
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <label for="inputCity" className="form-label">Ciudad / Provincia</label>
                <input type="text" className="form-control" id="estado" name="estado"/>
              </div>
              
            </div>          

            <div className="row mb-3">
              <div className="col-3">
                <label for="validationTelephone" className="form-label">Clave</label>
                <input type="tel" id="phone" name="phone" className="form-control" value="+52" aria-describedby="inputGroupPrepend" value="+52" required/>
                  
              </div>
              <div className="col">
                <label for="validationTelephone" className="form-label">Telefono a 10 digitos</label>
                <div className="input-group has-validation">
                  <span className="input-group-text" id="inputGroupPrepend">
                    <i className="fas fa-phone"></i>
                  </span>
                  <input type="tel" className="form-control" id="phone3" name="phone3" aria-describedby="inputGroupPrepend" required/>
                  <div className="invalid-feedback">
                    Por favor llena este campo
                  </div>
                </div>
              </div>


            </div>

            <div className="row mb-3">
              <div className="col">
                <label className="form-label">¿Deseas que un asesor te contacte?</label>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" id="asesor" name="asesor" value="si" data-fv-field="asesor" required/>
                  <label className="form-check-label" for="inlineRadio1">Si</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" id="asesor" name="asesor" value="no" data-fv-field="asesor"/>
                  <label className="form-check-label" for="inlineRadio2">No</label>
                </div>
                
              </div>
            </div>

           
            
            <button type="submit" className="btn btn-primary w-100" id="boton-enviar">Enviar</button>
          </form>

          
         




          

        </div>
      </div>
    </div>
  </div>

        </>
    )
}

export default Contacto
