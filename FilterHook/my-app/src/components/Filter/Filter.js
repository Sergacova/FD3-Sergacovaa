import React, { useState, useCallback, useMemo } from 'react';
import Controls from '../Controls/Controls';
import List from '../List/List';
import './Filter.css';
import words from '../Filter/wordsList.json';
const Filter = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const filterWords = useMemo(() => {
    const filteredList = words.filter((word) => word.includes(searchValue));
    if (isChecked) {
      return filteredList.sort();
    }
    return filteredList;
  }, [isChecked, searchValue]);

  const changeInputValues = useCallback((event) => {
    setSearchValue(event.target.value);
  }, []);

  const resetFilter = useCallback(() => {
    setIsChecked(false);
    setSearchValue('');
  }, []);

  return (
    <div className="Filter">
      <Controls
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        searchValue={searchValue}
        changeInputValues={changeInputValues}
        resetFilter={resetFilter}
      />
      <List filterWords={filterWords} />
    </div>
  );
};

export default Filter;
