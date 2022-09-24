const SearchBar = ({ search, updateSearch }) => {
  return (
    <div className="flex flex-row justify-center items-center h-10">
      <input
        className="border-2 border-blue-800 text-blue-800 font-bold rounded-l-xl px-2 py-1 focus:outline-none"
        type="text"
        value={search}
        onChange={(event) => updateSearch(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;