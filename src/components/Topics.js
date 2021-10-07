import React from 'react'
import Table from './Table'
import  { useParams } from "react-router-dom";
import CesarArenas from './CesarArenas';

function Topics(props) {
    const splitarray = (string) => {
        // let result = []
         let newarray = string.split("\n\n")
         let result = newarray.map( (element) => (element.split("\n")))
         return result
     }

    let { id } = useParams();

    let conferencia1 = splitarray(
        `I.- Qué es el Proceso Entrega-Recepción
        I.1- Antecedentes.
        I.2.- Marco Legal aplicable al proceso entrega-recepción 
        I.3.- Generalidades 
        I.4.- Partes
        1.5.-Formalidades.
        1.6. Verificación de la Información
        1.7.- Formatos.

        II.- Información o documentación que se entrega. 
        II.1.- Organización
        II.2.- Marco Regulatorio y Situación Legal.
        II.3.- Planeación
        II.4.- Financiero
        II.5.- Administrativo
        II.6.-Inversión en Obra Pública y otros.
        II.7.-Transparencia
        II.8.-Control y Fiscalización
        II.9.- Compromisos legales.

        III.- La Comisión de Enlace.
        III.1.- Quienes la integran.
        III.2.- Cuáles son sus funciones.
        III.3.- Papel del OIC
        III.4.- Papel del Órgano Fiscalizador Estatal.

        IV. Responsabilidades Administrativas con motivo de la Entrega Recepción.
        IV.1.- De las Observaciones
        IV.2.- Del Plazo
        IV.3.- De las Notificaciones.
        IV.4.- De la Denuncia ante el OIC.`

    )

    let conferencia2 = splitarray(
       `I.- Antecedentes del Régimen Municipal en México.
        I.1.- Marco Constitucional y Legal.
        I.2.- Marco Teórico conceptual.

        II.- La Gestión Pública Municipal.
        II.1.- La Gobernanza Municipal.
        II.2.- Diseño, Implementación y Evaluación de Políticas Públicas Municipales.
        II.3.- Ejes para la Elaboración del Plan de Gobierno Municipal.

        III. Organización y funcionamiento municipal. 
        III.1.- La Secretaría General.
        III.2.- La Tesorería.
        III.3.- La Contraloría.
        III.4.- Otras áreas importantes.`

    )

    let conferencia3 = splitarray(
        `I.- Antecedentes del Régimen Municipal en México.
        I.1.- Marco Constitucional y Legal.
        I.2.- Marco Teórico conceptual.

        II.- La Gestión Pública Municipal.
        II.1.- La Gobernanza Municipal.
        II.2.- Diseño, Implementación y Evaluación de Políticas Públicas Municipales.
        II.3.- Ejes para la Elaboración del Plan de Gobierno Municipal.

        III. Organización y funcionamiento municipal. 
        III.1.- La Secretaría General.
        III.2.- La Tesorería.
        III.3.- La Contraloría.
        III.4.- Otras áreas importantes.`
    )

    let conferencia4 = splitarray(
        `I.- Marco Constitucional y legal
        I.1.- Constitución Federal.
        1.2.- Constitución Política de la Ciudad de México.
        I.2.- Constitución Local.
        I.3.- Ley Orgánica de Alcaldías de la Ciudad de México.
        1.4- Leyes Orgánicas Municipales
        I.5.- Reglamentos y Acuerdos.\n\nII.- Presupuesto de Ingresos del Municipio. 
        II.1.-Ingresos ordinarios. 
        II.2.-Impuestos. 
        II.3.-Derechos. 
        II.4.-Productos. 
        II.5.-Aprovechamientos. 
        II.6.- Contribuciones de mejoras. 
        II.7.-Participaciones federales. 
        II.8.- Ingresos extraordinarios: 
        a) Subsidios. 
        b) Créditos. 
        c) Otros.\n\nIII.- Clasificación del Gasto (Egresos)
        III.1.- Clasificación administrativa. 
        III.2.-Clasificación por objeto de gasto. 
        III.3.-Otras clasificaciones. 
        III.4.-Gasto público y crecimiento.\n\nIV.- La Armonización Contable.
        IV.- La Ley General de Contabilidad Gubernamental
        V.- Ley de Discipllina Financiera para Estados y Municipios
        VI.- Ley de Presupuesto y Responsabilidad Hacendaria
        VII.- Leyes de Presupuesto locales.
        VIII.- Acuedos del CONAC.`
    )

    let conferencia5 = splitarray(
        `I.- Breve comentario sobre el Sistema Nacional y Estatal Anticorrupción.
        I.1.- El Comité Coordinador (componentes).
        I.2- El Consejo de Participación Ciudadana.
        I.3.- El Secretaría Ejecutiva.\n\nII. La Función Pública
        II.1.- Principios que rigen la función pública
        II.3.- Obligaciones de los Servidores Públicos\n\nIII.- Responsabilidad administrativa
        III.1.- Quejas y Denuncias
        III.2.-Sanciones administrativas
        III.-3.- Amonestación
        III.4.- Suspensión
        III.5.-Destitución
        III.6.- Sanción económica
        III.7.- Inhabilitación\n\nIV.- Procedimiento disciplinario
        IV.1- Imposición e inscripción de las sanciones administrativas
        IV.2.- Recurso de Revocación
        IV.-3 Juicio de Nulidad\n\nV.- Otras Responsabilidades 
        V.1.- Responsabilidad Resarcitoria
        V.2.- Responsabilidad Civil
        V.3.- El daño
        V.4.- La restitución
        V.5.- Demanda civil
        V.6.-Sanción civil\n\nV.7.- Responsabilidad Penal
        a)Delitos cometidos por los servidores públicos
        b) Delitos contra la Administración Pública
        c) Penas y medidas de seguridad
        d) Reincidencia
        e) Prescripción de la acción penal\n\nV.8.-Responsabilidad Política
        a)Sujetos de Juicio Político
        b) Causas de procedencia
        c)  Sanciones administrativas con motivo de la responsabilidad política\n\nVI.- Procedimiento en el Juicio Político
        VI.1.- Denuncia
        VI.2.- Substanciación del juicio
        VI.3.- Sección instructora
        VI.4.- Sección de enjuiciamiento
        VII.- Procedimiento para la declaración de procedencia`
    )

    let conferencia6 = splitarray(
        `I.-Marco jurídico de las Responsabilidades Administrativas 
        I.1.- Constitución Política de los Estados Unidos Mexicanos 
        I.2.- Ley General de Responsabilidades Administrativas 
        I.3.- Constitución local
        I.4.- Ley Orgánica Municipal 
        I.5.- Ley de Adquisiones local
        1.6.- Ley de Obra Píblica local
        1.6.- Manuales de Organización.\n\nII.- De las autoridades competentes 
        II.1.- El área de Auditoría.
        II.2.- El área de Quejas (Investigación)
        II.3.- El área de Responsabilidades (Sustanciación)\n\nIII.-  Del origen de la investigación
        III.1.-Del inicio de la Investigación de las Quejas y Denuncias 
        III.2.-De las faltas administrativas No Graves 
        III.3.- De las Faltas administrativas Graves 
        III.4.-De los actos particulares que se consideren vinculados a Faltas Administrativas Graves 
        III.5.- Del acuerdo de conclusión y archivo del expediente 
        III.6.- Del archivo del Expediente por incosteabilidad.\n\nIV.- De la Autoridad Substanciadora 
        VI.1.- De la recepción del Informe de Presunta Responsabilidad Administrativa 
        VI.-2.-Del inicio del Procedimiento de Responsabilidad Administrativa 
        VI.3.-De las partes en el Procedimiento de Responsabilidad Administrativa 
        VI.4.-De las medidas de apremio 
        VI.5.-De las medidas cautelares 
        VI.6.-De las causas de improcedencia y sobreseimiento en el Procedimiento de Responsabilidad Administrativa VI.7.- De la Audiencia Inicial y envío del expediente al Tribunal de Justicia Administrativa por faltas administrativas graves.
        VI.8.- De la Resolución.
        VI.9.- De la Abstención de sancionar.`
    )

    let conferencia7 = splitarray(
        `I.- Derechos Económicos, sociales, medio ambientales y culturales 
        I.1.- Marco teórico y normativo
        I.2.- Instrumentación en el ámbito municipal\n\nII.- Vínculos entre violencia, pobreza y desarrollo productivo
        II.1.- Indicadores principales
        II.2.- Estado de derecho y Teoría del cambio
        II.3.- Gobernanza y desarrollo\n\nIII.- Políticas de reducción de la pobreza y atención de grupos prioritarios
        III.1.- Marco teórico y normativo
        III.2.- Instituciones, reglas y herramientas 
        III.3.- Acceso y garantía de derechos\n\nIV. Caso relevante`
    )
    
    switch (id) {
        case '1':
            return (
                <div className="container">
                        <h4 className="text-center fw-bold">
                        Viernes 5 de noviembre <br/>
                        Horario: de 9 a 12 hrs y de 12 a 14 hrs <br/>
                        Virtual prescencial por vía Zoom
                        <br/>
                        
                        Ponente: C.P. Gerardo Casamata Gómez<br/>
                        CURSO I <br/>
                        “Entrega-Recepción Municipal”

                    </h4>
                   
                    {
                        conferencia1.map( value =>(<Table array={value} />))
                    }
                    
                </div>
            )
        case '2': // foo is 0 so criteria met here so this block will run
            return (
                <div className="container">
                    
                    <h4 className="text-center fw-bold">
                            Sábado 6 de noviembre. <br/>
                            Horarios: de 9 a 12 hrs y de 12 a 14 hrs
                            <br/>
                        Virtual prescencial por vía Zoom
                        <br/>
                        Ponentes: Antonio Mejía Ceja y Enrique Pineda Figueroa <br/>
                        CURSO II <br/>
                        “Administración Pública Municipal”

                    </h4>
                    
                    {
                        conferencia2.map( value =>(<Table array={value} />))
                    }
                    
                </div>
            )
        case '3': // no break statement in 'case 0:' so this case will run as well
            return (
                <div className="container">
                        <h4 className="text-center fw-bold">
                        viernes 12 de noviembre <br/>
                        Horario: de 9 a 12 hrs y de 12 a 14 hrs <br/>
                        Virtual y presencial por vía Zoom <br/>
                        Ponente: Lic. Gabriela Ocampo García <br/>

                        CURSO III <br/>
                        “Habilidades Directivas en la Administración Pública Municipal”
                        </h4>
                    {
                       conferencia3.map( value =>(<Table array={value} />)) 
                    }
                    
                </div>
            )
        case '4':
            return (
                <div className="container">
                    <h4 className="text-center fw-bold">
                            Sábado 13 de noviembre <br/>
                            Horario: de 9 a 12 hrs y de 12 a 14 hrs <br/>
                            Virtual presencial vía Zoom <br/>
                            Ponente: C.P. Jorge Michel Luna <br/>
                            CURSO IV <br/>
                            “Finanzas públicas de los Municipios y de las Alcaldías”
                    </h4>
                    {
                        conferencia4.map( value =>(<Table array={value} />))
                    }
                    
                </div>
            )
        case '5':
            return (
                <div className="container">
                    <h4 className="text-center fw-bold">
                    Viernes 19 de noviembre <br/>
                    Horario: de 9 a 12 hrs y de 12 a 14 hrs <br/>
                    Virtual presencial vía Zoom <br/>
                    Ponentes: Dr. Arturo Vázquez Espinosa <br/>
                    Dr. Alfredo Javier Arias Casas <br/>
                    CURSO V <br/>
                    “Responsabilidades Administrativas de los Servidores Públicos” <br/>
                    </h4>

                    {
                        conferencia5.map( value =>(<Table array={value} />))
                    }
                    
                </div>
            )
        case '6':
            return (
                <div className="container">
                    <h4 className="text-center fw-bold">
                    Sábado 20 de noviembre <br/>
                    Horario: de 9 a 12 hrs y de 12 a 14 hrs <br/>
                    Virtual presencial vía Zoom <br/>


                    CURSO VI <br/>
                    “Procedimientos de investigación y sustanciación ante el OIC municipal” <br/>
                    Ponente: Lic. Vicente Loredo Méndez <br/>
                    Magistrado Jorge Alberto Estrada Cuevas <br/>



                    </h4>
                    {
                        conferencia6.map( value =>(<Table array={value} />))
                    }
                    
                </div>
            )

        case '7':
            return (
                <div className="container">
                        <h4 className="text-center fw-bold">
                        Viernes 26 de noviembre <br/>
                        Horario: de 9 a 12 hrs <br/>
                        Virtual presencial vía Zoom <br/>
    
    
                        CURSO VII <br/>
                        “Enfoque de derechos y seguridad humana en la promoción municipal del desarrollo” <br/>
                        Ponente: Mtro. Fredy Cesar Arenas Valdez <br/>
                        
    
    
    
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
