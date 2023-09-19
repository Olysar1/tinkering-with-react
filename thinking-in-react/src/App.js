import "./App.css";
import FilterableProductTable from "./components/FilterableProductTable/FilterableProductTable";
import { PRODUCTS } from "./testArray";

function App() {
  return (
    <>
      <FilterableProductTable products={PRODUCTS} />
    </>
  );
}

export default App;
