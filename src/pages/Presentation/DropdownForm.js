// DropdownForm.js
import React from 'react';
import PropTypes from 'prop-types';

const DropdownForm = ({ selected, onDropdownChange }) => {
  const handleDropdownChange = (e) => {
    onDropdownChange(e.target.value);
  };

  console.log('DropdownForm Props:', { selected, onDropdownChange });

  return (
    <div>
      <label>Select Position: </label>
      <select value={selected} onChange={handleDropdownChange}>
        <option value="Select Item">Select Item</option>
        <option value="PhD Scholar">PhD Scholar</option>
        <option value="Part Time PhD Scholar">Part Time PhD Scholar</option>
        <option value="Executive Students">Executive Students</option>
        <option value="Others">Others</option>
        {/* <option value="item3">Item 3</option> */}
        {/* Add more options as needed */}
      </select>
    </div>
  );
};

DropdownForm.propTypes = {
  selected: PropTypes.string.isRequired,
  onDropdownChange: PropTypes.func.isRequired,
};

export default DropdownForm;
