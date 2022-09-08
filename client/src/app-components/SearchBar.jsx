import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ search, updateSearch }) => {
  const [value, setValue] = useState(search);

  return (
    <div className="flex flex-row justify-center items-center h-10">
      <input
        className="border-2 border-blue-800 text-blue-800 font-bold rounded-l-xl px-2 py-1 focus:outline-none"
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />

      <button
        className="bg-blue-800 hover:bg-blue-900 text-white h-full rounded-r-xl px-3 py-1"
        onClick={() => updateSearch(value)}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
};

export default SearchBar;