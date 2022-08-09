import { useEffect, useState } from "react";

import Graficas from "./Graficas/Graficas";
import CrearTransaccion from "./Transacciones/CrearTransaccion";
import IAOperaciones from "./Transacciones/IAOperaciones";
import Inversiones from "./Transacciones/Inversiones";
import ListadoTransacciones from "./Transacciones/ListadoTransacciones";

const Dashboard = () => {

  const userInitial = {
    id: "",
    user: "",
    apiKey: ""
  }

  const [usuarioLogeado, setUsuarioLogeado] = useState(userInitial);

  useEffect(() => {
    if(localStorage.getItem("user") != null){
      setUsuarioLogeado(localStorage.getItem("user"));
    }else{
      console.log("no esta registrado");
    }
  });
  

  return (
    <div className="Container">
      <CrearTransaccion/>
      <ListadoTransacciones/>
      <Inversiones/>
      <Graficas/>
      <IAOperaciones/> 
    </div> 
  )
}

export default Dashboard;
