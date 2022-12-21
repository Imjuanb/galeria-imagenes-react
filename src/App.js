import React from "react";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App">

      <div className="container text-center">
      <Header title="Galería de Imágenes con React" />
      <hr />
      <Card
      urlBart="https://i.pinimg.com/originals/1c/08/f6/1c08f612b0f79c68dfe90685e0e6306f.jpg" 
      titleBart="Bart Simpson"   
      descriptionBart="Hijo de Omero Simpsom"
      urlLisa="https://i.pinimg.com/originals/c7/b1/78/c7b178649adce0d49fb440814b9b40c9.jpg"
      titleLisa="Lisa Simpson"
      descriptionLisa="Hija de Omero Simpson"
      urlOmero="https://imagenes.elpais.com/resizer/EL70gbJpew8S1LX26VnuikTEEL8=/1960x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/CKJODPGW4OA2KDYDF6SSLHZIJE.jpg"
      titleOmero="Omero Simpson"
      descriptionOmero="Papa de lisa y Bart"
      />
      <hr />
      <Footer footer="Todos los derechos reservados"/>
      </div>
    </div>
  );
}

export default App;
