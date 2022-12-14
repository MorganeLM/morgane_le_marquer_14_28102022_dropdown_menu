# react-dropdown-menu
A library of React components created using `create-react-app` for a ready-to-use dropdown-menu-selector in react projects.


## Requirements

- React 18.2.0+


## Installation
- Run the following command:
`npm install react-dropdown-menu-lmm`


## Usage
To use the plugin, import it in your React component. 
It needs the two props handleChange and options to work properly: onChange is the function executed when a new value is selected and options is an array of object with a "name" required property used to populate the component. The entire option object is provided as parameter to onChange function.
The id property is optional to add an id to the select of the component.

Example:
```js
import React from 'react';
import {useState} from 'react';
import ReactDropdownMenu from 'react-dropdown-menu-lmm';

function App(){
    const states = [
    {
        "name": "Alabama",
        "abbreviation": "AL"
    },
    {
        "name": "Alaska",
        "abbreviation": "AK"
    },
    {
        "name": "Arizona",
        "abbreviation": "AZ"
    }
   ];

    const [selected, setSelected] = useState(states[0]);

    const handleChange = (option) => {
        setSelected(option);
    }

  return (
    <>
        <h1>Hello React Dropdown</h1>
        <label htmlFor='mySelector'>Choose a state:</label>
        <ReactDropdownMenu options={states} 
                           onChange={handleChange} 
                           id={'mySelector'}/>   
        <p>The selected value is: {selected.name} ({selected.abbreviation}) </p>
    </>
  );
}

export default App;
```
