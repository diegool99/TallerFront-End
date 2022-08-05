import '../Styles/CrearTransaccion.css'


const CrearTransaccion = () => {
    return (
        <section className='form'>
            <article>
                <label>Moneda
                    <select id="moneda" defaultValue={'DEFAULT'}>
                        <option value="DEFAULT" disabled key={"defalut"}></option>
                    </select>
                </label>
            </article>
            <label>Saldo</label>
            <article>
                <label>Moneda</label>
                <input type='text'></input>
                <label>$</label>
                <input type='text'></input>
            </article>
            <article>
                <p><button>Comprar</button></p>
                <p><button>Vender</button></p>
            </article>
        </section>
    )
}

export default CrearTransaccion