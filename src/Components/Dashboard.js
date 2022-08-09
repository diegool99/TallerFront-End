import { useEffect } from "react";
import { useNavigate} from "react-router-dom";
import { useSelector } from 'react-redux';
import Graficas from "./Graficas/Graficas";
import CrearTransaccion from "./Transacciones/CrearTransaccion";
import IAOperaciones from "./Transacciones/IAOperaciones";
import Inversiones from "./Transacciones/Inversiones";
import ListadoTransacciones from "./Transacciones/ListadoTransacciones";
import GraficaCompras from "./Graficas/GraficaCompras";
import GraficaVentas from "./Graficas/GraficaVentas";
import GraficaMonedas from "./Graficas/GraficaMonedas";
import Header from "./Header";


const Dashboard = () => {

  const token = useSelector(state => state.apiKey.apiKey);
  let navigate = useNavigate();

  useEffect(()=>{
    if(token == null || token == ""){
      navigate("/");
    }  
  },[token])

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
