
const Login = () => {
  return (
    <form className='App form' >
      <h2>Login</h2>
      <label >Usuario
        <input id="LoginUser" type="text" />
      </label>
      <label >Contraseña
        <input id="LoginPass" type="password" />
      </label>
      <a><button className="GreenBtn">Ingresar</button></a>
      <a><button className="AuxBtn">Registrarme</button></a>
    </form>
  )
}

export default Login