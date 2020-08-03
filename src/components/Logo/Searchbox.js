import React from 'react';

const SearchBox =() =>{
    return(
        <div className='pa2'>
           <input 
              className='pa3 ba b--white bg-lightest-yellow'
              type='search'
              placeholder='Enter Restaurants Name'
           />
        </div>
    );
}

export default SearchBox;