import GraficaCompras from "./GraficaCompras";
import GraficaVentas from "./GraficaVentas";
import GraficaMonedas from "./GraficaMonedas";

const Graficas = () => {
  return (
<section className="ClassGraf">
      <article className="ClassGraf">
        <GraficaCompras />
      </article>
      <article className="ClassGraf">
        <GraficaVentas />
      </article>
      <article className="ClassGraf">
        <GraficaMonedas />
      </article>
    </section>
  )
}

export default Graficas