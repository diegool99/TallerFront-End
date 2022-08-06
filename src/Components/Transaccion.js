
const Transaccion = ({moneda,tipo_operacion,cantidad,valor_actual}) => {
  return (
    <tr>
        <td>{moneda}</td>
        <td>{(tipo_operacion === 1) ? "Compra" : "Venta" }</td>
        <td>{cantidad}</td>
        <td>{valor_actual}</td>
    </tr>
  )
}

export default Transaccion