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
            <article>
            <label>Valor actual</label>
            <h2>U$D 25.50</h2>
            <label>Saldo actual</label>
            <h2>U$D 230.00</h2>
            </article>
            <article>
                <label>Transacciones</label>
                <input type='number'></input>
            </article>
            <article>
                <p><button className='GreenBtn'>Comprar</button></p>
                <p><button className='GreenBtn'>Vender</button></p>
            </article>
        </section>
    )
}

export default CrearTransaccion