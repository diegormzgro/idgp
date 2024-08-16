import React from "react";
import Carousel from "./Carousel";
import Carousel2 from "./Carousel2";
import CesarArenas from "./CesarArenas";
import Eventos from "./Eventos";
import Nosotros from "./Nosotros";
import Profesores from "./Profesores";
import Servicios from "./Servicios";
import cartelfinal from "../assets/cartelfinal.jpg";
import Imagen from "./Imagen";
import Video from "./Video";

function Inicio() {
  return (
    <>
      <Carousel2 />
      <Imagen src={cartelfinal}></Imagen>
      <Video />
      <Nosotros />

      <Servicios />
      <Eventos />
    </>
  );
}

export default Inicio;
