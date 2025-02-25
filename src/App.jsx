import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  //introdução a react router: diferentes url pra diferentes componentes --> ROUTES
  //essencial para SINGLE PAGE APLICATIONS
  //pagina nunca é recarregada
  //react atualiza o dom
  return (
    <BrowserRouter>
      <Routes>
        <Route path="products" element={<Products />} />
        <Route path="/" element={<Homepage />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
