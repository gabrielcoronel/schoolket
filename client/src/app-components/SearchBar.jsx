const SearchBar = ({ search, updateSearch }) => {
  return (
    <div className="flex flex-row justify-center items-center h-10">
      <input
        className="w-full border border-slate-400 text-blue-800 rounded-md px-2 py-1 focus:outline-none"
        type="text"
        placeholder="¿Qué buscas?"
        value={search}
        onChange={(event) => updateSearch(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;