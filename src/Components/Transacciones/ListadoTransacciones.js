import { useEffect } from "react";
import { guardarTransacciones } from "../../Features/transaccionesSlice";
import { useDispatch, useSelector } from "react-redux";
import Transaccion from "./Transaccion";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const ListadoTransacciones = () => {


  const apiKey = useSelector(state => state.apiKey.apiKey);
  const dispatch = useDispatch();
  const transacciones = useSelector(state => state.transacciones.transacciones);

  //CARGO LAS TRANSACCIONES POR PRIMERA VEZ

  useEffect(() => {
    let myHeaders = new Headers();
    myHeaders.append("apikey", apiKey);
    myHeaders.append("Content-Type", "application/json");

    let requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    try {
      fetch('https://crypto.develotion.com//transacciones.php?idUsuario=2', requestOptions)
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
                style: {
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
        style: {
          background: '#242132'
        }
      });
    }


  }, []);


  return (

    <section className="listaTrans">
      <h2>Transacciones</h2>
      <table>
        <thead>
          <tr>
            <td width={"245px"}>Moneda</td>
            <td width={"300px"}>Tipo de transaccion</td>
            <td width={"215px"}>Cantidad</td>
            <td>Monto</td>
          </tr>
        </thead>
        <tbody>
          {transacciones.map(transaccion => <Transaccion key={transaccion.id} {...transaccion} />)}
        </tbody>
      </table>
      <ToastContainer />
    </section>
  )
}

export default ListadoTransacciones;