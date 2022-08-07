import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux/es/exports";
import Option from "../Option";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);




const GraficaMonedas = () => {

    const monedaRef = useRef();
    const [monedaSelect, setMonedaSelect] = useState();
    const transacciones = useSelector(state => state.transacciones.transacciones);
    const monedas = useSelector(state => state.monedas.monedas);
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        let aux = [];
        aux = transacciones.filter(trans => trans.moneda == monedaSelect);
        setDatos(aux);
    }, [monedaSelect])

    const cambioMoneda = e =>{
        setMonedaSelect(monedaRef.current.value)
    }



    return (
        <section>
            <label className='dashTransMoneda'>Moneda
                <select id="ChangeMoneda" className='dashTrans' defaultValue={'DEFAULT'} ref={monedaRef} onChange={cambioMoneda}>
                    <option value="DEFAULT" disabled key={"DEFAULT"}></option>
                    {monedas.map((moneda, id) => <Option key={id} {...moneda} />)}
                </select>
            </label>
            <Bar options={
                {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'Compras por moneda',
                        },
                    }
                }} data={{
                    labels: datos.map(trans => trans.id),
                    datasets: [
                        {
                            label: 'Compra',
                            data: datos.map(trans => trans.valor_actual),
                            backgroundColor: 'green',
                        }
                    ]
                }}
            />
        </section>
    )
}

export default GraficaMonedas