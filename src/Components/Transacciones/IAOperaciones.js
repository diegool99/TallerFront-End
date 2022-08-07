import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Transaccion from "./Transaccion";

const IAOperaciones = () => {

    const transacciones = useSelector(state => state.transacciones.transacciones);
    const [ultimaTrans, setUltimaTrans] = useState([])

    useEffect(() => {
      
        setUltimaTrans (transacciones[(transacciones.length)-1])
        
    }, [transacciones])
    
  return (
    <section className="tableTrans">
      <table>
        <thead>
          <tr>
            <td>Moneda</td>
            <td>Ultima transaccion</td>
            <td>Cantidad</td>
          </tr>
        </thead>
        <tbody>
          {transacciones.map(transaccion => <Transaccion key={transaccion.id} {...transaccion}/>)}
        </tbody>
      </table>
    </section>
    //<h1>{ultimaTrans.id}</h1>
  )
}

export default IAOperaciones