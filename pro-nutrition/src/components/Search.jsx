const Search = (props) => {
  const { setSearch } = props;

  return (
    <>
      <h1>Search</h1>
      <input
        type="search"
        style={{
          width: "400px",
          padding: "10px , 40px",
          fontSize: "large",
        }}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Search Food here"
      />

        

    </>
  );
};

export default Search;
