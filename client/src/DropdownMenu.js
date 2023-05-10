import React from 'react'

import './DropdownMenu.css'

function DropdownMenu( {options, value, setValue, placeholder, title} ) {
 
  return (
    <div className = 'dropdown-container'>
      <h3>{title}</h3>
      <select
        value = {value}
        onChange = {(e) => setValue(e.target.value)}
      >
        <option value = "">
          {placeholder}
        </option>
        {
          options.map((s) => {
            return (
              <option
                key = {s}
                value = {s}
              >{s}</option>
            )
          }) 
        }
      </select>
    </div>
  )
}

export default DropdownMenu