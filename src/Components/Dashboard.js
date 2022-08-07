import Graficas from "./Graficas/Graficas";
import CrearTransaccion from "./Transacciones/CrearTransaccion"
import Inversiones from "./Transacciones/Inversiones";
import ListadoTransacciones from "./Transacciones/ListadoTransacciones";

const Dashboard = () => {
  return (
    <div>
      <CrearTransaccion/>
      <ListadoTransacciones/>
      <hr/>
      <Inversiones/>
      <hr/>
      <Graficas/>
    </div> 
  )
}

export default Dashboard;
