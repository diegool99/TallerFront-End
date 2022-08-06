import CrearTransaccion from "./CrearTransaccion"
import ListadoTransacciones from "./ListadoTransacciones";

const Dashboard = () => {
  return (
    <div>
      <CrearTransaccion/>
      <hr/>
      <ListadoTransacciones/>
    </div> 
  )
}

export default Dashboard;
