import { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/CrearTransaccion.css'
import Option from './Option';

const CrearTransaccion = () => {

  const monedaRef = useRef(0);
  const montoRef = useRef(0);
  const [valorMoneda, setValorMoneda] = useState("");
  const [monedas, setMonedas] = useState([]);

  useEffect(() => {

    let myHeaders = new Headers();
    myHeaders.append("apiKey", "949843be40c7ba753ad8427e5de1478f");
    myHeaders.append("Content-Type", "application/json");

    let requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };

    fetch("https://crypto.develotion.com/monedas.php", requestOptions)
      .then(response => response.json())
      .then(result => {
        setMonedas(result.monedas.map(moneda => {
          return { value: moneda.id, label: moneda.nombre, cotizacion: moneda.cotizacion }
        }));
      })
      .catch(error => console.log('error', error));
  }, []);

  //#endregion
  const valorMonedaActual = e => {
    setValorMoneda("$ "+monedas.find(moneda => moneda.value == monedaRef.current.value).cotizacion);
  }
  //#region Registrar usuario

   const registrarTrans = (e) => {

    let cotizacion = monedas.find(moneda => moneda.value == monedaRef.current.value);

    let myHeaders = new Headers();
    myHeaders.append("apiKey", "949843be40c7ba753ad8427e5de1478f");
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      "idUsuario": 3,
      "tipoOperacion": e.target.id,
      "moneda": monedaRef.current.value,
      "cantidad": montoRef.current.value,
      "valorActual": cotizacion.cotizacion,
    });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://crypto.develotion.com/transacciones.php", requestOptions)
      .then(response => response.json())
      .then(result => {
        switch (result.codigo) {
          case 200:
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
        <label className='dashTransMoneda'>Moneda
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
        <input className='dashTrans' ref={montoRef} type='number'></input>
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

