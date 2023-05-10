import { useState } from 'react';
import PropTypes from 'prop-types';
import { articleItemPropTypes } from './ArticleCardItem';

const SearchBar = ({ setSearchField, onSearch }) => {
  const [onTyping, setOnTyping] = useState('');

  const onChange = (e) => {
    setOnTyping(e.target.value);
    onSearch(e.target.value);
    setSearchField(e.target.value);
  };

  return (
    <form>
      <label
        // for="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          onChange={onChange}
          value={onTyping}
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 rounded-full bg-[#E3EEFF]"
          placeholder="Search Article..."
          required
        />
      </div>
    </form>
  );
};

SearchBar.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape(articleItemPropTypes)).isRequired,
  setSearchField: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  setArticles: PropTypes.func.isRequired,
};

export default SearchBar;
