import ProductTable from "../ProductTable/ProductTable";
import SearchBar from "../SearchBar/SearchBar";
import "./FilterableProductTable.css";

const FilterableProductTable = ({ products }) => {
  return (
    <div className="container">
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
};

export default FilterableProductTable;
