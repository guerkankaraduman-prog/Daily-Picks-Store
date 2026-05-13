export default function ProductSearch({
  searchTerm,
  setSearchTerm,
}) {
  return (
    <div className="product-search">

      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
        className="product-search-input"
      />

    </div>
  );
}
