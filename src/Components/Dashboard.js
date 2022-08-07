import CrearTransaccion from "./Transacciones/CrearTransaccion"
import IAOperaciones from "./Transacciones/IAOperaciones";
import Inversiones from "./Transacciones/Inversiones";
import ListadoTransacciones from "./Transacciones/ListadoTransacciones";

const Dashboard = () => {
  return (
    <div className="Container">
      <CrearTransaccion/>
      <ListadoTransacciones/>
      <Inversiones/>
      {/* <IAOperaciones/> */}
    </div> 
  )
}

export default Dashboard;
