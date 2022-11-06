import React from "react";
import './ReactDropdownMenu.css';

function ReactDropdownMenu(props){
    const handleChange = event => {
        props.onChange(event.target.value);
      };

  return (
    <select id={props.id}
            className="react-dropdown-menu form-select"
            onChange={(e)=>handleChange(e)}>
      {props.options.map(option => (
        <option key={option.name} value={option.name}>{option.name}</option>
      ))} 
    </select>
  );
}

export default ReactDropdownMenu;