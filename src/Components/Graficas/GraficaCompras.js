import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/exports";
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




const GraficaCompras = () => {

    const transacciones = useSelector(state => state.transacciones.transacciones);
    const monedas = useSelector(state => state.monedas.monedas);
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        let aux = [];
        let aux2 = [];
        monedas.forEach(moneda => {
            aux2 = transacciones.filter(trans => trans.moneda == moneda.value && trans.tipo_operacion == 1);
            aux.push({
                ...moneda,
                operaciones: aux2
            });
        });
        setDatos(aux);
    }, [transacciones])



    return (
        <section className="grCompra">
            <article>
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
                        labels: datos.map(moneda => moneda.label),
                        datasets: [
                            {
                                label: 'Compra',
                                data: datos.map(moneda => {
                                    let suma = 0;
                                    moneda.operaciones.forEach(operacion => {
                                        suma += operacion.valor_actual * operacion.cantidad;
                                    });
                                    return suma;
                                }),
                                backgroundColor: 'green',
                            }
                        ]
                    }}
                />
            </article>
        </section>
    )
}

export default GraficaCompras