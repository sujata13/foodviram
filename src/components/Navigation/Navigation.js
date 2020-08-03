import React from 'react';

const Navigation = () =>{
    return(
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p className='f3 link dim yellow underline pa3 pointer'>Login</p>
            <p className='f3 link dim yellow underline pa3 pointer'>Signup</p>
        </nav>
    )
}

export default Navigation;