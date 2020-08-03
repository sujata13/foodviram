import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Logo.css';
import SearchBox from './Searchbox';
const Logo = ({searchfield, searchChange}) =>{
    return(
        <div className='backimg'>
            <Navigation/>
            <h1 className='f1 light-yellow'>FOODVIRAAM</h1>
            <div className='tc'>
                <div className='pa2'>
                    <input 
                       className='pa3 ba b--white bg-lightest-yellow'
                       type='search'
                       placeholder='Enter Restaurant Name'
                       onChange={ searchChange }
                    />
                </div>
            </div>
        </div>
    );
}

export default Logo;