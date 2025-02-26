// Uses the same styles as Product
import styles from "./Product.module.css";
import PageNav from "../Components/PageNav";
export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <div>
          <h2>
            Preço justo
            <br />
            Apenas $9/mês.
          </h2>
          <p>
            Por apenas $9 por mês, você pode manter um registro{" "}
            <strong>detalhado</strong> de todos os lugares que já visitou. Nosso
            serviço oferece uma maneira acessível e conveniente de documentar
            suas viagens, permitindo que você{" "}
            <strong>reviva suas memórias</strong> sempre que quiser. Com um
            preço tão baixo, é uma oferta que{" "}
            <strong>você não pode perder!</strong>
          </p>
          <span>*sujeito a alterações</span>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
