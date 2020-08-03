import React from 'react';
import RestImage from './RestImage/RestImage';
import RestDetails from './RestDetails/RestDetails'
import MenuList from './MenuList/MenuList';


class Restaurant extends React.Component{
    constructor(){
        super();
        this.state={
          menulist:[],
          searchfield:''
        }
      }
    
      componentDidMount(){
        fetch('https://protected-citadel-48729.herokuapp.com/menulists/')
           .then(response=> response.json())
           .then(menulists=>this.setState({menulist: menulists}));   
    }

    render (){
        const{ menulist, searchfield }= this.state;
        const filteredmenulists=menulist.filter(menulist =>{
            return menulist.itemname.toLowerCase().includes(searchfield.toLowerCase());
          })
    return(
        <div>
            <RestImage/>
            <RestDetails/>
            <h3>Order Online</h3>
            {/*<MenuItem/>*/}
            <MenuList menulist={filteredmenulists}/>
        </div>
    );
    }
}

export default Restaurant;