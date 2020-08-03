import React from 'react';
import Restlist from './Restlist';
import axios from 'axios';

const ParentRestlist=({restaurant, onRouteChange})=>{
    return(
        <div>
            { 
                restaurant.map((restaurants,i)=>{
                    return (
                        <div onClick={onRouteChange}>
                      <Restlist 
                        key={i}  
                        // id={restaurant[i].id}
                        //restimg={restaurants[i].img1}
                        name={restaurant[i].name} 
                        address={restaurant[i].address} 
                        distance={restaurant[i].distance} 
                        //washroomrat={restaurants[i].washroomrat} 
                        //restrat={restaurants[i].restrat}
                      />
                      </div>
                    );
                })
            }
        </div>
    );
}

export default ParentRestlist;