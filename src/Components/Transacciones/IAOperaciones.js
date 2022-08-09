import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Operaciones from "./Operaciones";

const IAOperaciones = () => {

  const monedas = useSelector(state => state.monedas.monedas);
  const transacciones = useSelector(state => state.transacciones.transacciones);
  const [ultimaTrans, setUltimaTrans] = useState([])

  useEffect(() => {
    let aux = [];
    let aux2 = [];
    monedas.forEach(moneda => {
      aux2 = transacciones.filter(trans => trans.moneda == moneda.value);
      aux.push({
        ...moneda,
        ultimaOperacion: aux2[aux2.length-1]
      });
    });
    console.log(aux);
    setUltimaTrans(aux);

  }, [transacciones])

  return (
    <section className="iAOperaciones">
      <h2>IA Operaciones</h2>
      <table>
        <thead>
          <tr>
            <td width={"245px"}>Moneda</td>
            <td width={"300px"}>Ultima transaccion</td>
            <td width={"215px"}>Cantidad comprada</td>
            <td>Cotizacion comprada</td>
            <td>Cotizacion actual</td>
            <td>Recomendacion</td>
          </tr>
        </thead>
        <tbody>
          {ultimaTrans.map((trans,i) => <Operaciones key={i} {...trans} />)}
        </tbody>
      </table>
    </section>
    //<h1>{ultimaTrans.id}</h1>
  )
}

export default IAOperaciones