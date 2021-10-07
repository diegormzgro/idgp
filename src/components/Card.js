import React from 'react'
import '../styles/card.css'

import { BrowserRouter as Router, Route, Switch, useRouteMatch, Link } from 'react-router-dom';
import Mision from './Mision';
import Topics from './Topics';

function Card(props) {
    let match = useRouteMatch();
    return (
        
        <div className="card h-100">
       
            <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body d-flex flex-column  ">
                <div className="body">
                <h2 class="card-title">{props.title}</h2>
                <p className="card-text">{props.description}</p>
                </div>
                <div className="text-center btn-holder">
                <Link to={`/${props.number}`}>
                     <button type="button" className="btn btn-mydark mt-3">{props.button}</button>
                </Link>
                
                </div>
                
            </div>
            
       
            
        </div>

        
        
    )
}

export default Card
