import { useEffect } from "react";
import { guardarTransacciones } from "../../Features/transaccionesSlice";
import { useDispatch, useSelector } from "react-redux";
import Transaccion from "../Transaccion";
import '../../Styles/ListaTransacciones.css'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ListadoTransacciones = () => {

  const token = useSelector(state => state.apiKey.apiKey);
  const dispatch = useDispatch();
  const transacciones = useSelector(state => state.transacciones.transacciones);

  //CARGO LAS TRANSACCIONES POR PRIMERA VEZ

  useEffect(() => {
    let myHeaders = new Headers();
    myHeaders.append("apikey", token);
    myHeaders.append("Content-Type", "application/json");

    let requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    try {
      fetch("https://crypto.develotion.com//transacciones.php?idUsuario=2", requestOptions)
      .then(response => response.json())
      .then(result => {
        switch (result.codigo) {
          case 200:
            dispatch(guardarTransacciones(result.transacciones));
            break;
            default:
              toast.warn(result.mensaje, {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                style:{
                  background: '#242132'
                }
              });
        }
      });
    } catch (error) {
      toast.warn(error.message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style:{
          background: '#242132'
        }
      });
    }

    
  }, []);


  return (
    
    <section className="tableTrans">
      <h1>Transacciones</h1>
      <table>
        <thead>
          <tr>
            <td>Moneda</td>
            <td>Tipo de transaccion</td>
            <td>Cantidad</td>
            <td>Monto</td>
          </tr>
        </thead>
        <tbody>
          {transacciones.map(transaccion => <Transaccion key={transaccion.id} {...transaccion}/>)}
        </tbody>
      </table>
      <ToastContainer/>
    </section>
  )
}

export default ListadoTransacciones;