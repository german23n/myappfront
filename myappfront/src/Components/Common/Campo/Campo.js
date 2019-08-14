import React from 'react';

export default  ( { caption , type, value, name, onChange, ...props} ) =>{
    return(
      <fieldset>
        <legend>{caption}</legend>
        <input 
        type= {type|| "text"}
         value={value|| ""}
          name={name} 
          onChange={(onChange||function(){})}
          />  
      </fieldset> 
    );

}