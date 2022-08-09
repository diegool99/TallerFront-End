import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/Login.css';

const Login = () => {

  const user = useRef(null);
  const pass = useRef(null);
  const [btnStyle, setbtnStyle] = useState('btnactive');

  const habilitarBoton = e => {
    let userNew = user.current.value;
    let passNew = pass.current.value;

    if (userNew !== '' || passNew !== '') {
      setbtnStyle('GreenBtn');
    } else {
      setbtnStyle('btnactive');
    }
  }

  const iniciarSesion = e => {
    let userNew = user.current.value;
    let passNew = pass.current.value;

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      "usuario": userNew,
      "password": passNew
    });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://crypto.develotion.com//login.php", requestOptions)
      .then(response => response.json())
      .then(result => {
        switch (result.codigo) {
          case 200:
            let usuarioLogeado = {
              id: result.id,
              user: userNew,
              token: result.apiKey
            }
            localStorage.setItem("user",usuarioLogeado);
            toast.success("Se a iniciado sesión correctamente", {
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
            case 409:
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
            break;
        }
      })
      .catch(error => console.log('error', error));
  }

  return (
    <section className='App form' >
      <h2>Login</h2>
      <label >Usuario
        <input id="LoginUser" type="text" ref={user} onChange={habilitarBoton} />
      </label>
      <label >Contraseña
        <input id="LoginPass" type="password" ref={pass} onChange={habilitarBoton} />
      </label>
      <p><button className={btnStyle} onClick={iniciarSesion}>Ingresar</button></p>
      <p><button className="AuxBtn">Quiero registrarme</button></p>
      <ToastContainer/>
    </section>
  )
}

export default Login