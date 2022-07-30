import { useRef,useEffect, useState } from 'react';
import '../Styles/Register.css';

const Register = () => {

  /* const user = useRef(null);
  const pass = useRef(null);
  const id_depto = useRef(null);
  const [id_city,setcity] = useState(""); */

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
        let options = result.departamentos.map(dptos => {
          return `<option value="${dptos.id}">${dptos.nombre}</option>`
        })
        console.log(options);
      })
      .catch(error => console.log('error', error));
    }, [])
  //#endregion

/*   //#region Localidades
  const cargarCiudades = e => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var urlencoded = new URLSearchParams();

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    fetch(`https://crypto.develotion.com//ciudades.php?idDepartamento=${e.target.value}`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  //#endregion */

/*   //#region Registro
  const validarNuevoRegistro = ({ user_new, pass_new }) => {
    if (user_new == null) {
      throw "Debe ingresar un usuario";
    } else if (pass_new == null) {
      throw "Debe ingresar la contraseña";
    }
  }

  const registrar = () => {
    let user_new = user.current.value;
    let pass_new = pass.current.value;
    let depto_new = id_depto.current.value;
    let city_new = id_city.current.value;

    let raw = JSON.stringify({
      "usuario": user_new,
      "password": pass_new,
      "idDepartamento": depto_new,
      "idCiudad": city_new
    });

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    try {
      validarNuevoRegistro(raw);
      fetch("https://crypto.develotion.com//usuarios.php", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    } catch (error) {
      alert(error.message);
    }

  }*/
//#endregion 


  return (
    <form className='App form' >
      <h2>Registro</h2>
      <label >Usuario
        <input id="RegisterUser" /* ref={user} */ type="text" />
      </label>
      <label >Contraseña
        <input id="RegisterPass" /* ref={pass} */ type="text" />
      </label>
      <label >Departamento
        <select id="RegisterDep" /* ref={id_depto} */ /* onChange={cargarCiudades} */ defaultValue={'DEFAULT'}>
          <option value="DEFAULT" disabled>Elija una ciudad</option>
        </select>
      </label>
      <label >Ciudad
        <select id="RegisterCity" /* ref={id_city} */ defaultValue={'DEFAULT'}>
          <option value="DEFAULT" disabled>Elija una ciudad</option>
          <option>Montevideo</option>
          <option>Canelones</option>
          <option>Rocha</option>
          <option>Artigas</option>
          <option>Rivera</option>
          <option>Soriano</option>
        </select></label>
      <a><button>Registrar</button></a>
    </form>
  )
}

export default Register

{/* <footer>
        <article>
          <img src={footer}></img>
        </article>
      </footer> */}