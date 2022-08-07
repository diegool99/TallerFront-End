import CrearTransaccion from "./CrearTransaccion"
import Inversiones from "./Inversiones";
import ListadoTransacciones from "./ListadoTransacciones";

const Dashboard = () => {
  return (
    <div>
      <CrearTransaccion/>
      <hr/>
      <ListadoTransacciones/>
      <hr/>
      <Inversiones/>
    </div> 
  )
}

export default Dashboard;
