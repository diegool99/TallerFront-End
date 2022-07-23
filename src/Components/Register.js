import '../Styles/Register.css';

const Register = () => {
  return (
        <form className='App form' >
          <h2>Registro</h2>
          <label >Usuario<input id="RegisterUser" /* placeholder="Ingrese un usuario" */ type="text"/></label>
          <label >Contraseña<input id="RegisterPass" /* placeholder="Ingrese una contraseña" */type="text"/></label>
          <label >Departamento<select id="RegisterDep"/></label>
          <label >Ciudad<select id="RegisterCity">
          <option disabled selected>Elija una ciudad</option>
          <option>Montevideo</option>
          <option>Canelones</option>
          <option>Rocha</option>
          <option>Artigas</option>
          <option>Rivera</option>
          <option>Soriano</option>
          </select></label>
          <a><button >Registrar</button></a>
        </form>
  )
}

export default Register

{/* <footer>
        <article>
          <img src={footer}></img>
        </article>
      </footer> */}