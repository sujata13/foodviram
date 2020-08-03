import React from 'react';
import MenuItem from './MenuItem';

const MenuList = ({menulist}) =>{
    return(
        <div>
            {
                menulist.map((menulists,i) => {
                    return (
                      <MenuItem 
                        key={i}  
                        //id={menulist[i].id}
                        //menuimg={menulist[i].menuimg}
                        itemname={menulist[i].itemname} 
                        itemdesc={menulist[i].itemdesc} 
                        price={menulist[i].price}
                      />
                    );
                })
            }
        </div>
    );
}

export default MenuList;