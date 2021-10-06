import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';
import Inicio from './components/Inicio';
import Mision from './components/Mision';
import Servicios from './components/Servicios';
import Publicaciones from './components/Publicaciones';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

import 'bootstrap/dist/js/bootstrap.min.js'
import "bootstrap/dist/css/bootstrap.min.css";

//important! put main.css after bootstrap.min.css
import './styles/main.css';
import Topics from './components/Topics';
import Curriculum from './components/Curriculum';
import CesarArenas from './components/CesarArenas';
import Eventos from './components/Eventos';


function App() {
  
  let url="/index.html"
  return (

    <Router>
      <div className="App">

        <Navbar />

        <div className="content">
          <Switch>
            <Route exact path="/">
              <Inicio />
            </Route>
            <Route exact path="/mision">
              <Mision/>
            </Route>
            <Route exact path="/servicios">
              <Servicios/>
            </Route>
            <Route exact path="/publicaciones">
              <Publicaciones/>
            </Route>
            <Route exact path="/contacto">
              <Contacto/>
            </Route>
            <Route exact path="/cursos">
              <Eventos/>
            </Route>
            <Route exact path={`/:id`}>
              
              <Topics  />
            </Route>
            
            <Route path='*'>
              <a href={url}></a>
            </Route>
          </Switch>
        </div>
        <Footer/>
      </div>

    </Router>
  );
}

export default App;
