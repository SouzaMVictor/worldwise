import styles from "./Map.module.css";
import { useSearchParams } from "react-router-dom";
function Map() {
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={styles.mapContainer}>
      <h1>map</h1>
      <h1>
        position: {lat}, {lng}
      </h1>
      <button onClick={() => setSearchParams({ lat: 23, lng: 50 })}>
        change position
      </button>
      {/* mudamos a query usando setsearchparams */}
    </div>
  );
}
//useSearchParams é similar ao useState hook. retorna a array com o state atual e a função que da pra setar. busca o state no url.
export default Map;
