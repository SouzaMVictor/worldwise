import styles from "./Product.module.css";
import PageNav from "../Components/PageNav";
export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img
          src="img-1.jpg"
          alt="pessoa com cachorro olhando para a montanha com o pôr do sol"
        />
        <div>
          <h2>Sobre a WorldWide.</h2>
          <p>
            Descubra o mundo como nunca antes com a WorldWide. Nosso produto
            cataloga meticulosamente cada lugar que você visita, transformando
            suas viagens em uma jornada perfeitamente organizada. Reviva suas
            aventuras, aprecie suas memórias e compartilhe suas experiências com
            entes queridos. Deixe a WorldWide ser sua companheira de confiança
            na exploração das maravilhas do mundo, um destino de cada vez.
          </p>
        </div>
      </section>
    </main>
  );
}
