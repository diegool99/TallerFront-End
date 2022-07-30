import { useEffect, useRef, useState } from 'react';
import Option from './Option';
import '../Styles/Register.css';

const Register = () => {

  //#region VARIABLES
  const deptoRef = useRef();
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


  return (
    <form className='App form' >
      <h2>Registro</h2>
      <label >Usuario
        <input id="RegisterUser" type="text" />
      </label>
      <label >Contraseña
        <input id="RegisterPass" type="text" />
      </label>
      <label >Departamento
        <select id="RegisterDep" defaultValue={'DEFAULT'} ref={deptoRef} onChange={changeDepto}>
          <option value="DEFAULT" disabled></option>
          {departamentos.map(dpto => <Option {...dpto} />)}
        </select>
      </label>
      <label >Ciudad
        <select id="RegisterCity" defaultValue={'DEFAULT'}>
          <option value="DEFAULT" disabled></option>
          {ciudades.map(ciudad => <Option {...ciudad} />)}
        </select></label>
      <a><button className="GreenBtn">Registrar</button></a>
      <a><button className="AuxBtn">Volver a login</button></a>
    </form>
  )
}

export default Register