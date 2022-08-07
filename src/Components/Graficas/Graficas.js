import GraficaCompras from "./GraficaCompras";
import GraficaVentas from "./GraficaVentas";
import GraficaMonedas from "./GraficaMonedas";

const Graficas = () => {
  return (
<section className="ClassGraf">
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