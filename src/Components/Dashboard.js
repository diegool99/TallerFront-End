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
  return (
    <div className="container">
        <Header />
        <ListadoTransacciones />
        <CrearTransaccion />
        <Inversiones />
        <IAOperaciones />
        <GraficaCompras />
        <GraficaVentas />
        <GraficaMonedas />

    </div>
  )
}

export default Dashboard;
