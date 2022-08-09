import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { guardarApiKey, guardarId } from "../Features/apiKeyReducer";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {

  const user = useRef(null);
  const pass = useRef(null);
  const [isDisabled, setDisabled] = useState(true);

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const habilitarBoton = e => {
    let userNew = user.current.value;
    let passNew = pass.current.value;

    if (userNew !== '' && passNew !== '') {
      setDisabled(false);
    } else {
      setDisabled(true);
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
            dispatch(guardarApiKey(result.apiKey));
            dispatch(guardarId(result.id));
            /* let usuarioLogeado = {
              id: result.id,
              token: result.apiKey,
              user: userNew
            }
            localStorage.setItem("user", usuarioLogeado); */
            toast.success("Se a iniciado sesión correctamente", {
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
            navigate("/dashboard");
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

  return (
    <section className='lobby'>
      <article>
        <h2>Login</h2>
        <label >Usuario
          <input id="LoginUser" type="text" ref={user} onChange={habilitarBoton} />
        </label>
        <label >Contraseña
          <input id="LoginPass" type="password" ref={pass} onChange={habilitarBoton} />
        </label>
        <p><button className="GreenTransBtn" disabled={isDisabled} onClick={iniciarSesion}>Ingresar</button></p>
        <p><Link to="/register"><button className="AuxBtn">Quiero registrarme</button></Link></p>

      </article>
      <ToastContainer />
    </section>
  )
}

export default Login