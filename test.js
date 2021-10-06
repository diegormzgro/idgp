const splitarray = (string) => {
   // let result = []
    let newarray = string.split("\n\n")
    let result = newarray.map( (element) => (element.split("\n")))
    return result
}
let conferencia4 = splitarray(
    `I.- Marco Constitucional y legal
    I.1.- Constitución Federal.
    1.2.- Constitución Política de la Ciudad de México.
    I.2.- Constitución Local.
    I.3.- Ley Orgánica de Alcaldías de la Ciudad de México.
    1.4- Leyes Orgánicas Municipales
    I.5.- Reglamentos y Acuerdos.

    II.- Presupuesto de Ingresos del Municipio. 
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
    c) Otros. 

    III.- Clasificación del Gasto (Egresos)
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
console.log(conferencia4)