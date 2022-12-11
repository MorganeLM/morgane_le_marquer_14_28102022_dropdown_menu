import React from "react";
import './ReactDropdownMenu.css';

function ReactDropdownMenu(props){
    const handleChange = event => {
        const selectedOption = props.options.filter(option => option.name === event.target.value)[0];
        props.onChange(selectedOption);
      };

  return (
    <select id={props.id}
            className="react-dropdown-menu form-select"
            onChange={(e)=>handleChange(e)}>
      {props.options.map(option => {
        return <option key={option.name} value={option.name}>{option.name}</option>;
      }
      )} 
    </select>
  );
}

export default ReactDropdownMenu;