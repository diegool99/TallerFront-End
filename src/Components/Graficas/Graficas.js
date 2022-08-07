import GraficaCompras from "./GraficaCompras";
import GraficaVentas from "./GraficaVentas";
import '../../Styles/Graficas.css';
import GraficaMonedas from "./GraficaMonedas";

const Graficas = () => {
  return (
    <section className="app form">
        <acticle>
        <GraficaCompras/>
        </acticle>
        <acticle>
          <GraficaVentas/>
        </acticle>
        <article>
          <GraficaMonedas/>
        </article>
    </section>
  )
}

export default Graficas