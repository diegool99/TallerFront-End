
const Login = () => {
  return (
    <section className='App form' >
      <h2>Login</h2>
      <label >Usuario
        <input id="LoginUser" type="text" />
      </label>
      <label >Contraseña
        <input id="LoginPass" type="password" />
      </label>
      <p><button className="GreenBtn">Ingresar</button></p>
      <p><button className="AuxBtn">Registrarme</button></p>
    </section>
  )
}

export default Login