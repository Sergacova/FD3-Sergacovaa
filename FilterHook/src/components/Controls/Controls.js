import React from 'react';
import './Controls.css';

const Controls = ({
  isChecked,
  setIsChecked,
  searchValue,
  changeInputValues,
  resetFilter,
}) => {
  return (
    <div className="Actions">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <input type="text" value={searchValue} onChange={changeInputValues} />
      <input type="button" value={'reset'} onClick={resetFilter} />
    </div>
  );
};

export default Controls;
