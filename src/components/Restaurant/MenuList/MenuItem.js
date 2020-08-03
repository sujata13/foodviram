import React from 'react';
import '../Restaurant.css'

const MenuItem = ({itemname, itemdesc, price}) => {
    return(
        <div className='bg-white dib restcenter br3 pa1 w-80 ma2 bw2 shadow-5' style={{clear: "both"}}>
            <div className='dtc largethreebox' style={{float: "left"}}>
                <img src={require('./menupic.jpg')} alt='menu pic'/>
            </div>
            <div className='dtc largethreebox' style={{float: "center"}}>
                <h4>{itemname}</h4>
                <p className='f6'>{itemdesc}</p>
                <p className='f6'>{price}</p>
            </div>
            <div className='dtc smallthreebox tr'  style={{float: "right"}}>
                <div className="">
                <input className="b yellow ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Add"/>
            </div>
            </div>
        </div>
    );
}

export default MenuItem;