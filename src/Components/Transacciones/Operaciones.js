import { useEffect,useState } from "react";

const Operacion = ({ label,cotizacion,ultimaOperacion}) => {

  const [color, setColor] = useState({ color: "#36d45b" });
  const[color2,setColor2] = useState({ color: "#36d45b"})

  const cambioColor = () => {
    if(ultimaOperacion != undefined){(ultimaOperacion.tipo_operacion == 1) ? setColor({ color: "#36d45b" }) : setColor({ color: "#b42a2a" })}
    
  }

  const cambioColorRecomendacion = () =>{
    if(ultimaOperacion != undefined){(ultimaOperacion.valor_actual > cotizacion) ? setColor2({color: "#36d45b"}) : setColor2({ color: "#b42a2a" })}
  }

  useEffect(() => {
    cambioColor();
    cambioColorRecomendacion();
  }, [ultimaOperacion]);


  return (
    <tr>
      <td>{label}</td>
      <td style={color}>{(ultimaOperacion != undefined) ?
        ((ultimaOperacion.tipo_operacion == 1 ) ? "Compra" : "Venta") : ""
      }</td>
      <td>{(ultimaOperacion != undefined) ? ultimaOperacion.cantidad : ""}</td>
      <td>{(ultimaOperacion != undefined) ? ultimaOperacion.valor_actual : ""}</td>
      <td>{cotizacion}</td>
      <td style={color2}>{(ultimaOperacion != undefined) ?
      ((ultimaOperacion.valor_actual > cotizacion) ? "Comprar" : "Vender") : ""}</td>
    </tr>
  )
}

export default Operacion
