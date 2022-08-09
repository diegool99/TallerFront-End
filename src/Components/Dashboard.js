import { useEffect, useState } from "react";
import Graficas from "./Graficas/Graficas";
import CrearTransaccion from "./Transacciones/CrearTransaccion";
import IAOperaciones from "./Transacciones/IAOperaciones";
import Inversiones from "./Transacciones/Inversiones";
import ListadoTransacciones from "./Transacciones/ListadoTransacciones";
import GraficaCompras from "./Graficas/GraficaCompras";
import GraficaVentas from "./Graficas/GraficaVentas";
import GraficaMonedas from "./Graficas/GraficaMonedas";
import Header from "./Header";
import '../Styles/Grafica.css';


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
    <div className="container">
        <Header />
        <ListadoTransacciones />
        <CrearTransaccion />
        <Inversiones />
        <IAOperaciones />
        {/* <GraficaCompras />
        <GraficaVentas />
        <GraficaMonedas /> */}

    </div>
  )
}

export default Dashboard;
