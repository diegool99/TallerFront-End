import GraficaCompras from "./GraficaCompras";
import GraficaVentas from "./GraficaVentas";
import GraficaMonedas from "./GraficaMonedas";

const Graficas = () => {
  return (
    <section className="app form">
      <article>
        <GraficaCompras />
      </article>
      <article>
        <GraficaVentas />
      </article>
      <article>
        <GraficaMonedas />
      </article>
    </section>
  )
}

export default Graficas