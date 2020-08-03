import React from 'react';
import StarRatingComponent from 'react-star-rating-component';



const Restlist=({name, address, distance}) => {
    return(
        
        <div className='bg-white dib br3 pa1 ma2 w-80 bw2 shadow-5'>
            <div className='dtc tl'>
                <img src={require('./restcardpic.jpg')} alt='rest pic'/>
            </div>
            <div className='dtc tc'>
                <h4>{name}</h4>
                <p className='f6'>{address}</p>
                <p className='f6'>{distance}</p>
            </div>
            <div className='dtc tr pr6'>
                <div>
                   <p className='f6'>Washroom</p>
                   <StarRatingComponent 
                       name="rate2" 
                       editing={false}
                       //renderStarIcon={() => <span></span>}
                       starCount={5}
                       value={3}
                    />
                </div>
                <div>
                    <p className='f6'>Restaurant</p>
                    <StarRatingComponent 
                       name="rate2" 
                       editing={false}
                       //renderStarIcon={() => <span></span>}
                       starCount={5}
                       value={4}
                    />
                </div>
            </div>
            <div className="">
                <input 
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                type="submit" 
                value="Order Now"
                />
            </div>
        </div>
    );
}

export default Restlist;