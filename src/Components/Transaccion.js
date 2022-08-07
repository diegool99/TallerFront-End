import { useSelector } from "react-redux";

const Transaccion = ({moneda,tipo_operacion,cantidad,valor_actual}) => {

  const monedas = useSelector(state => state.monedas.monedas);

  return (
    <tr>
        <td>{monedas.find(m => m.value == moneda).label}</td>
        <td>{(tipo_operacion == 1) ? "Compra" : "Venta" }</td>
        <td>{cantidad}</td>
        <td>{valor_actual}</td>
    </tr>
  )
}

export default Transaccion