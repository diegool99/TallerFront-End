import { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Option from './Option';
import '../Styles/Register.css';

const Register = () => {

  //#region VARIABLES
  const userRef = useRef();
  const passRef = useRef();
  const deptoRef = useRef();
  const locRef = useRef();
  const [depto, setDepto] = useState();
  const [departamentos, setDeptos] = useState([]);
  const [ciudades, setCuidades] = useState([]);

  //#endregion

  //#region Departamentos
  useEffect(() => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://crypto.develotion.com/departamentos.php", requestOptions)
      .then(response => response.json())
      .then(result => {
        setDeptos(result.departamentos.map(dpto => {
          return { value: dpto.id, label: dpto.nombre }
        }));
      })
      .catch(error => console.log('error', error));
  }, []);

  const changeDepto = e => {
    setDepto(deptoRef.current.value);
  }
  //#endregion

  //#region Cuidades
  useEffect(() => {
    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(`https://crypto.develotion.com//ciudades.php?idDepartamento=${depto}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setCuidades(result.ciudades.map(ciudad => {
          return { value: ciudad.id, label: ciudad.nombre }
        }))
      })
      .catch(error => console.log('error', error));
  }, [depto])
  //#endregion

  //#region Registrar usuario
  const registrarUsuario = e => {

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      "usuario": userRef.current.value,
      "password": passRef.current.value,
      "idDepartamento": deptoRef.current.value,
      "idCiudad": locRef.current.value
    });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };



    fetch("https://crypto.develotion.com//usuarios.php", requestOptions)
      .then(response => response.json())
      .then(result => {
        switch (result.codigo) {
          case 200:
            let usuarioLogeado = {
              id: result.id,
              user: userRef.current.value,
              token: result.apiKey
            }
            localStorage.setItem("user",usuarioLogeado);
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
          case 409:
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
    <section className='App form' action=''>
      <h2>Registro</h2>
      <label >Usuario
        <input id="RegisterUser" type="text" ref={userRef} />
      </label>
      <label >Contraseña
        <input id="RegisterPass" type="text" ref={passRef} />
      </label>
      <label >Departamento
        <select id="RegisterDep" defaultValue={'DEFAULT'} ref={deptoRef} onChange={changeDepto}>
          <option value="DEFAULT" disabled key={"DEFAULT"}></option>
          {departamentos.map((dpto, id) => <Option key={id} {...dpto} />)}
        </select>
      </label>
      <label >Ciudad
        <select id="RegisterCity" defaultValue={'DEFAULT'} ref={locRef}>
          <option value="DEFAULT" disabled key={"DEFAULT"}></option>
          {ciudades.map((ciudad, id) => <Option key={id} {...ciudad} />)}
        </select></label>
      <p><button className="GreenBtn" onClick={registrarUsuario}>Registrar</button></p>
      <p><button className="AuxBtn">Volver a login</button></p>
      <ToastContainer />
    </section>
  )
}

export default Register