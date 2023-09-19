import "./SearchBar.css";

const SearchBar = () => {
  return (
    <>
      <form className="search-bar">
        <input type="text" placeholder="search..." />
        <label>
          <input type="checkbox" />
          Only show products in stock
        </label>
      </form>
    </>
  );
};

export default SearchBar;
