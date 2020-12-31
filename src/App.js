import logo from './logo.svg';
import visa3 from './imagenes/visa3.png';
import visa4 from './imagenes/visa4.png';
import visa5 from './imagenes/visa5.png';
import "./compo/fontawesome-free-5.15.1-web/css/all.min.css";


import './App.css';


import  './compo/Conte1.css';
import './compo/Conte2.css';
import './compo/Conte2conterci.css';
import  './compo/Conocimientos.css';
import  './compo/Proyectos.css';
import  './compo/Canal.css';
import  './compo/Footer.css';
import  './compo/Oferta.css';


import Caja1 from './compo/Conte1';
import Caja2 from './compo/Conte2';
import Conte2conterci from './compo/Conte2conterci';
import Proyectos from './compo/Proyectos';
import Canal from './compo/Canal';
import Footer from './compo/Footer';
import Conocimientos from './compo/Conocimientos';
import Luck from './compo/Luck';

<link rel="stylesheet" href="..compo/fontawesome-free-5.15.1-web/css/all.min.css"></link>





function App() {
  return (

     
  
     

     
    <div className="App">
     

     <Caja1/>
     <Luck/>
    <div className="over">
    <div className="contede2" id="contede2">
    <div className="spa"></div>
    <div className="conte2">
    <Caja2/>
    <Conte2conterci/>
    <Conocimientos/>
    <Proyectos/>
   
    <Canal/>
    <Footer/>



    </div>
    
    </div>
   
    </div>
</div>





       
     
   
  );
}

export default App;
