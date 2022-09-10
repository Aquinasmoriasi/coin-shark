import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { PropTypes } from 'prop-types';

const Search = ({ handleSearch, param }) => (
  <form>
    <input type="text" onChange={handleSearch} value={param} placeholder="search cryptos" />
    <BiSearch />
  </form>
);

Search.propTypes = {
  handleSearch: PropTypes.func,
  param: PropTypes.string,
};

Search.defaultProps = {
  handleSearch: null,
  param: null,
};

export default Search;
