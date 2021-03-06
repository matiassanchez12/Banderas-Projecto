import React, {useState} from 'react';
import InputSearch from './searchForm';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';

const SearchStyled = styled.div`
  display: flex;
  position: relative;
  .close {
    color:rgb(196, 196, 196);
    position: absolute;
    right: 1em;
    top: 1em;
    border-radius: 50%;
    border: none;
    box-shadow: 0 2px 9px 0 rgba(0,0,0,.05);
  }
`;

function Search () {
  const [inputValue, setInputValue] = useState ('');
  const dispatch = useDispatch ();

  const filterByName = e => {
    setInputValue (e.target.value);
    dispatch ({
      type: 'SET_COUNTRY_BY_NAME',
      payload: e.target.value,
    });
  };

  const clearInput = () => {
    setInputValue ('');
    dispatch ({
      type: 'SET_COUNTRY_BY_NAME',
      payload: '',
    });
  };

  return (
    <SearchStyled>
      {inputValue && <i className="fas fa-times close" onClick={clearInput} />}
      <InputSearch
        placeholder="Search for a country.."
        value={inputValue}
        onChange={filterByName}
      />
    </SearchStyled>
  );
}

export default Search;
