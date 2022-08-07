import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Operacion = ({moneda,tipo_operacion,cantidad,valor_actual}) => {

  const monedas = useSelector(state => state.monedas.monedas);
  const transacciones = useSelector(state => state.transacciones.transacciones);
  const [color, setColor] = useState({color:"#36d45b"});

  const cambioColor = () => {
    (tipo_operacion == 1) ? setColor({color:"#36d45b"}) : setColor({color:"#b42a2a"}) 
  }

  /* const executeFunctions = () => {
    let aux = [];
    let ultimo;
    monedas.forEach(moneda => {
        aux = transacciones.filter(transaccion => transaccion.moneda === moneda.id);
        ultimo = aux[aux.length-1];
        moneda.ultimaTrans = ultimo;
    }); */


  useEffect(() => {
    cambioColor();
    executeFunctions();
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

export default Operacion
