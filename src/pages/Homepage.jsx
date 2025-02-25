import { Link } from "react-router-dom";
import PageNav from "../Components/PageNav";

function Homepage() {
  return (
    <div>
      <PageNav />
      <h1>Homepage Worldwise</h1>
      {/* <a href="/Pricing.jsx">Pricing</a> //> nao deve ser feito assim porque atualiza a pagina inteira */}
      <Link to={"/Pricing"}>Pricing</Link>
      {/* link component com atributo to. tem que star entre parenteses e com o slash(/) pra indiicar que é a partir do root */}
    </div>
  );
}

export default Homepage;
