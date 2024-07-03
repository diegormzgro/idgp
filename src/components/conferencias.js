export const splitarray = (string) => {
    // let result = []
     let newarray = string.split("\n\n")
     let result = newarray.map( (element) => (element.split("\n")))
     return result
 }

let conferencia1 = splitarray(
    `I.- ¿Qué es el Proceso Entrega-Recepción?
    I.1.- Antecedentes
    I.2.- Marco Legal aplicable
    I.3.- Generalidades 
    I.4.- Partes
    I.5.- Formalidades
    I.6.- Proceso de verificación\n\nII.- Información o documentación que se entrega
    II.1.- Marco Regulatorio y Situación Legal 
    II.2.-. Planeación
    II.3.- Aspecto Financiero
    II.4.- Aspecto Administrativo
    II.5.- Inversión en Obra Pública y otros.
    II.6.- Asuntos de Transparencia
    II.7.-Control y Fiscalización
    II.8.- Compromisos legales
    II.9.- Formatos\n\nIII.- La Comisión de Enlace
    III.1.- Integrantes
    III.2.- Funciones
    III.3.- Papel del OIC
    III.4.- Papel del Órgano Fiscalizador Estatal\n\nIV. Responsabilidades Administrativas con motivo de la Entrega Recepción
    IV.1.- De las Observaciones
    IV.2.- Del Plazo
    IV.3.- De las Notificaciones.
    IV.4.- De la Denuncia y procedimientos ante el OIC\n\nV. Caso relevante
    `

)

let conferencia2 = splitarray(
  `I.- Entrega-Recepción Municipal
   IÎ.- Habilidades directivas en la APM
   III.- La Administración Pública Municipal
   IV.- Finanzas Públicas de los Municipios
   V.- SIIRE (Sistema de Integración Municipal SIIRE)
   VI.- Planeación del desarrollo municipal
   VII.- Procedimientos de investigación y sustancias ante el OIC municipal
   VIII.- Enfoque de derechos y seguridad humana en la promoción municipal del desarrollo
   IX.- Experiencia de gobiernos exitosos`

)

let conferencia3 = splitarray(
    `I.- La tarea de Dirección
    I.1.- La función
    I.2.- Las autoridades
    I.3.- La toma de decisiones
    I.4.- La comunicación
    I.5.- Estilos
    I.6.- La Inteligencia emocional\n\nII.- Conflictos y negociación 
    II.1.- Definición y tipología del conflicto 
    II.2.- Los sujetos en conflicto y/o negociación 
    II.3.- Actores y elementos del conflicto 
    II.4.- Métodos y técnicas para la identificación de los componentes del conflicto
    II.5.- Los actores individuales y colectivos
    II.6.- Los espacios y los tiempos del conflicto y la negociación
    II.7.- Alianzas y rupturas
    II.8.- Actividad: estudio de un caso\n\nIII.- El liderazgo en el proceso de dirección 
    III.1.- Papel del líder
    III.2.- Formación para líderes
    III.3.- El liderazgo en el trabajo y en la vida 
    III.4.- Tipos de Liderazgo
    III.5.- Liderazgo y trabajo en equipo\n\nIV. Caso relevante
    `
)

let conferencia4 = splitarray(
    `I.- Marco Constitucional y legal
    I.1.- Constitución Federal
    I.2.- Constitución Política de la Ciudad de México
    I.3.- Constitución Local
    I.4.- Ley Orgánica de Alcaldías de la Ciudad de México
    I.5.- Leyes Orgánicas Municipales
    I.6.- Reglamentos y Acuerdos\n\nII.- Presupuesto del Municipio: Ingresos
    II.1.- Presupuesto basado en resultados.
    II.2.- Ingresos ordinarios
    II.3.- Impuestos
    II.4.- Derechos
    II.5.- Productos
    II.6.- Aprovechamientos
    II.7.- Contribuciones de mejoras
    II.8.- Participaciones federales
    II.9.- Ingresos extraordinarios: 
    a) Subsidios
    b) Créditos
    c) Otros\n\nIII.- Presupuesto del Municipio: Egresos
    III.1.- Clasificación del Gasto (Egresos)
    III.2.- Clasificación administrativa
    III.3.- Clasificación por objeto de gasto 
    III.4.- Otras clasificaciones
    III.5.- Gasto público y crecimiento\n\nIV.- La Armonización Contable.
    IV.1.- La Ley General de Contabilidad Gubernamental
    IV.2.- Ley de Disciplina Financiera para Estados y Municipios
    IV.3.- Ley de Presupuesto y Responsabilidad Hacendaria
    IV.4.- Leyes de Presupuesto locales
    IV.5.- Acuerdos del CONAC\n\nV. Caso relevante
    `
)

let conferencia5 = splitarray(
    `I.- Sistema Nacional y Estatal Anticorrupción
    I.1.- El Comité Coordinador (componentes)
    I.2.- El Consejo de Participación Ciudadana
    I.3.- El Secretaría Ejecutiva\n\nII. Obligaciones derivadas de la Función Pública
    II.1.- Principios que rigen la función pública
    II.2.- Obligaciones de los Servidores Públicos
    II.3.- Declaración Patrimonial, Fiscal y de Intereses\n\nIII.- Responsabilidad administrativa
    III.1.- Quejas y Denuncias
    III.2.- Sanciones administrativas
    III.3.- Amonestación
    III.4.- Suspensión
    III.5.- Destitución
    III.6.- Sanción económica
    III.7.- Inhabilitación\n\nIV.- Procedimiento disciplinario
    IV.1.- Imposición e inscripción de las sanciones administrativas
    IV.2.- Recurso de Revocación
    IV.3.- Juicio de Nulidad\n\nV.- Otras Responsabilidades 
    V.1.- Responsabilidad Resarcitoria
    V.2.- Responsabilidad Civil
    V.3.- El daño
    V.4.- La restitución
    V.5.- Demanda civil
    V.6.- Sanción civil
    V.7.- Responsabilidad Penal
    a) Delitos cometidos por los servidores públicos
    b) Delitos contra la Administración Pública
    c) Penas y medidas de seguridad
    d) Reincidencia
    e) Prescripción de la acción penal
    V.8.- Responsabilidad Política
    a) Sujetos de Juicio Político
    b) Causas de procedencia
    c) Sanciones administrativas con motivo de la responsabilidad política\n\nVI.- Procedimiento en el Juicio Político
    VI.1.- Denuncia
    VI.2.- Substanciación del juicio
    VI.3.- Sección instructora
    VI.4.- Sección de enjuiciamiento
    VI.5.- Procedimiento para la declaración de procedencia\n\nVII. Caso relevante
    `
)

let conferencia6 = splitarray(
    `I.- Marco jurídico de las Responsabilidades Administrativas 
    I.1.- Constitución Política de los Estados Unidos Mexicanos 
    I.2.- Ley General de Responsabilidades Administrativas 
    I.3.- Constitución local
    I.4.- Ley Orgánica Municipal 
    I.5.- Ley de Adquisiciones local
    I.6.- Ley de Obra Pública local
    I.7.- Manuales de Organización\n\nII.- De las autoridades competentes 
    II.1.- El área de Auditoría
    II.2.- El área de Quejas (Investigación)
    II.3.- El área de Responsabilidades (Sustanciación)\n\nIII.- Del origen de la investigación
    III.1.- Del inicio de la Investigación de las Quejas y Denuncias 
    III.2.- De las faltas administrativas No Graves 
    III.3.- De las Faltas administrativas Graves 
    III.4.- De los actos particulares que se consideren vinculados a Faltas Administrativas Graves 
    III.5.- Del acuerdo de conclusión y archivo del expediente 
    III.6.- Del archivo del Expediente por incosteabilidad\n\nIV.- De la Autoridad Substanciadora 
    IV.1.- De la recepción del Informe de Presunta Responsabilidad Administrativa 
    IV.2.- Del inicio del Procedimiento de Responsabilidad Administrativa 
    IV.3.- De las partes en el Procedimiento de Responsabilidad Administrativa 
    IV.4.- De las medidas de apremio 
    IV.5.- De las medidas cautelares 
    IV.6.- De las causas de improcedencia y sobreseimiento en el Procedimiento de Responsabilidad Administrativa 
    IV.7.- De la Audiencia Inicial y envío del expediente al Tribunal de Justicia Administrativa por faltas administrativas graves
    IV.8.- De la Resolución
    IV.9.- De la Abstención de sancionar\n\nV. Caso relevante
    `
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

export { conferencia1, conferencia2, conferencia3, conferencia4, conferencia5, conferencia6, conferencia7}