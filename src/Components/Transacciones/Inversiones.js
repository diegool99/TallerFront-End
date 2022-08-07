import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux/es/exports";
import { guardarCompras,guardarTotal,guardarVentas } from "../../Features/InvertidoReducer";
import '../../Styles/CrearTransaccion.css'
import '../../Styles/Inversiones.css'

const Inversiones = () => {

    const transacciones = useSelector(state => state.transacciones.transacciones);
    const inversiones = useSelector(state => state.invertido);
    const dispatch = useDispatch();

    const calcularInversiones = () =>{
        let totalCompras = 0;
        let totalVentas =0;
        let aux = 0;

        transacciones.forEach(transaccion => {
            aux = transaccion.cantidad * transaccion.valor_actual;
            (transaccion.tipo_operacion == 1) ? totalCompras += aux : totalVentas += aux;
        });

        dispatch(guardarCompras(totalCompras));
        dispatch(guardarVentas(totalVentas));
        dispatch(guardarTotal(totalCompras-totalVentas));
    }

    useEffect(() => {
        calcularInversiones();
    })

    return (
        <section className="Classinversiones">
            <h1>Detalle de inversiones</h1>
            <label>Monto total en compras
                <h2 style={{color: 'green'}}>$ {inversiones.compras}</h2>
            </label>
            <label>Monto total en ventas
                <h2 style={{color: 'red'}}>$ {-inversiones.ventas}</h2>
            </label>
            <label>Monto total invertido
                <h2 style={{color: (inversiones.total > 0)? 'green' : 'red'}}>$ {inversiones.total}</h2>
            </label>
        </section>
    )
}

export default Inversiones