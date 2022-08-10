import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { agregarTransaccion } from "../../Features/transaccionesSlice";
import { guardarMonedas } from "../../Features/monedasReducer";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Option from '../Option';


const CrearTransaccion = () => {

  const apiKey = useSelector(state => state.apiKey.apiKey);
  const id = useSelector(state => state.apiKey.id);

  const monedaRef = useRef(0);
  const montoRef = useRef(0);
  const [valorMoneda, setValorMoneda] = useState("$ 0.00");
  const [monedas, setMonedas] = useState([]);
  const [isDisabled, setDisabled] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {

    let myHeaders = new Headers();
    myHeaders.append("apiKey", apiKey);
    myHeaders.append("Content-Type", "application/json");

    let requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };

    fetch("https://crypto.develotion.com/monedas.php", requestOptions)
      .then(response => response.json())
      .then(result => {
        let aux = result.monedas.map(moneda => {
          return { value: moneda.id, label: moneda.nombre, cotizacion: moneda.cotizacion }
        });
        setMonedas(aux);
        dispatch(guardarMonedas(aux));
      })
      .catch(error => console.log('error', error));
  }, []);

  //#endregion
  const valorMonedaActual = e => {
    setValorMoneda("$ " + monedas.find(moneda => moneda.value == monedaRef.current.value).cotizacion);
    setDisabled(false);
  }
  //#region Registrar transaccion

  const registrarTrans = (e) => {

    let cotizacion = monedas.find(moneda => moneda.value == monedaRef.current.value);

    let myHeaders = new Headers();
    myHeaders.append("apiKey", apiKey);
    myHeaders.append("Content-Type", "application/json");

    let raw = {
      "usuarios_id": id,
      "tipo_operacion": e.target.id,
      "moneda": monedaRef.current.value,
      "cantidad": montoRef.current.value,
      "valor_actual": cotizacion.cotizacion,
    }

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(raw),
      redirect: 'follow'
    };

    fetch("https://crypto.develotion.com/transacciones.php", requestOptions)
      .then(response => response.json())
      .then(result => {
        switch (result.codigo) {
          case 200:
            raw.id = result.idTransaccion;
            console.log("el numero es"+id);
            dispatch(agregarTransaccion(raw));
            toast.success(result.mensaje, {
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
            break;
          default:
            console.log("el numero es"+id);
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
            break;
        }
      })
      .catch(error => console.log('error', error));
  }
  //#endregion

  return (
    <section>
      <article>
        <h2>Mercado</h2>
        <label>
          <select id="ChangeMoneda" defaultValue={'DEFAULT'} ref={monedaRef} onChange={valorMonedaActual}>
            <option value="DEFAULT" disabled key={"DEFAULT"}>Moneda</option>
            {monedas.map((moneda, id) => <Option key={id} {...moneda} />)}
          </select>
        </label>
      </article>
      <article>
        <label >Valor actual</label>
        <h2 >{valorMoneda}</h2>
      </article>
      <article>
        <label >Unidades</label>
        <input min="0" step="1" ref={montoRef} type='number'></input>
      </article>
      <article>
        <p><button className='GreenTransBtn' disabled={isDisabled} id="1" onClick={registrarTrans}>COMPRAR</button></p>
        <p><button className='RedTransBtn' disabled={isDisabled} id="2" onClick={registrarTrans}>VENDER</button></p>
      </article>
      <ToastContainer />
    </section>
  )
}

export default CrearTransaccion

