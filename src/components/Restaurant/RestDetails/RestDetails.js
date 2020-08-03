import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import '../Restaurant.css'


const RestDetails = () =>{
    return(
        <div className='restcenter dib m6-ns w-80 bg-white'>
            <div>
                <div className='dtc twobox'>
                    <h4 >Subway Restaurant(Jaipur Side)</h4>
                    <p className='f6'>Vast Vihar, Delhi-Jaipur ExpressWay</p>
                    <p className='f6'>20 km from Delhi</p>
                </div>
                <div className='dtc twobox'>
                    <p className='yellow'>Open Now</p>
                </div>
            </div>
            <div style={{clear:"both"}}>
                <div className='dtc twobox' style={{float:"left"}}>
                    <StarRatingComponent 
                       name="rate2" 
                       editing={false}
                       //renderStarIcon={() => <span></span>}
                       starCount={5}
                       value={3}
                    />
                    <p>Restaurant Hygine</p>
                </div>
                <div className='dtc twobox' style={{float:"right"}}>
                    <StarRatingComponent 
                       name="rate2" 
                       editing={false}
                       //renderStarIcon={() => <span></span>}
                       starCount={5}
                       value={4}
                    />
                    <p>Washroom Hygine</p>
                </div>
            </div>
            <div className='dtc onebox'>
                <p>Highway hotel located at best place. Ultimate hygiene, Good Food. Must visit place.</p>
            </div>
        </div>
    );
}

export default RestDetails;