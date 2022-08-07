import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { agregarTransaccion } from "../../Features/transaccionesSlice";
import { guardarMonedas } from "../../Features/monedasReducer";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '../../Styles/CrearTransaccion.css'
import Option from '../Option';


const CrearTransaccion = () => {

  const token = useSelector(state => state.apiKey.apiKey);

  const monedaRef = useRef(0);
  const montoRef = useRef(0);
  const [valorMoneda, setValorMoneda] = useState("$ 0.00");
  const [monedas, setMonedas] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {

    let myHeaders = new Headers();
    myHeaders.append("apiKey", token);
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
    setValorMoneda("$ "+monedas.find(moneda => moneda.value == monedaRef.current.value).cotizacion);
  }
  //#region Registrar transaccion

   const registrarTrans = (e) => {

    let cotizacion = monedas.find(moneda => moneda.value == monedaRef.current.value);

    let myHeaders = new Headers();
    myHeaders.append("apiKey", token);
    myHeaders.append("Content-Type", "application/json");

    let raw = {
      "usuarios_id": 3,
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
    <section className='dashTrans'>
      <article>
        <label className='dashTrans'>Moneda
          <select id="ChangeMoneda" className='dashTrans' defaultValue={'DEFAULT'} ref={monedaRef} onChange={valorMonedaActual}>
            <option value="DEFAULT" disabled key={"DEFAULT"}></option>
            {monedas.map((moneda, id) => <Option key={id} {...moneda} />)}
          </select>
        </label>
      </article>
      <article>
        <label className='dashTrans'>Valor actual</label>
        <h2 className='dashTrans'>{valorMoneda}</h2>
      </article>
      <article>
        <label className='dashTrans'>Unidades</label>
        <input className='dashTrans' min="0" step="1" ref={montoRef} type='number'></input>
      </article>
      <article>
        <p><button className='GreenTransBtn' id="1" onClick={registrarTrans}>COMPRAR</button></p>
        <p><button className='RedTransBtn' id="2" onClick={registrarTrans}>VENDER</button></p>
      </article>
      <ToastContainer/>
    </section>
  )
}

export default CrearTransaccion
