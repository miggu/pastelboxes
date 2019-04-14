import React from 'react';


const SearchBox = (props) => {
    return  ( 
        <div>
        
       
        <input placeholder="Search for Articles" onChange={props.clickHandler} type="text"/>
          
        
        </div>
    )
}

export default SearchBox;