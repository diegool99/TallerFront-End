import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Transaccion = ({moneda,tipo_operacion,cantidad,valor_actual}) => {

  const monedas = useSelector(state => state.monedas.monedas);
  const [color, setColor] = useState({color:"#36d45b"});

  const cambioColor = () => {
    (tipo_operacion == 1) ? setColor({color:"#36d45b"}) : setColor({color:"#b42a2a"}) 
  }
  useEffect(() => {
    cambioColor();
  }, [tipo_operacion])

  return (
    <tr>
        <td>{monedas.find(m => m.value == moneda).label}</td>
        <td style={color}>{(tipo_operacion == 1) ? "Compra" : "Venta" }</td>
        <td>{cantidad}</td>
        <td>{valor_actual}</td>
    </tr>
  )
}

export default Transaccion
