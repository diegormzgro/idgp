import React from 'react'
import  { useParams } from "react-router-dom";
import CesarArenas from './CesarArenas';

function Curriculum() {
    let { integrante } = useParams();

    if(integrante === 'CesarArenas')
    {
        return (
            <div>
                    <CesarArenas/>
            </div>
        )
    }
    
}

export default Curriculum
