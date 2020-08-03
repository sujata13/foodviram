import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ParentRestList from './components/Restlist/ParentRestlist';
import 'bootstrap/dist/css/bootstrap.min.css';


import Restaurant from './components/Restaurant/Restaurant';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      route:'restlist',
      restaurant:[],
      searchfield:''
    }
  }

  componentDidMount(){
    fetch('https://protected-citadel-48729.herokuapp.com/restaurants/')
       .then(response=> response.json())
       .then(restaurants=>this.setState({restaurant: restaurants}));   
}

onSearchChange=(event)=>{
  this.setState({searchfield:event.target.value})
}

  // componentDidMount(){
  //   fetch('http://localhost:5000/')
  //     .then(response => response.json())
  //     .then(console.log);
  // }

  onRouteChange = () => {
    this.setState({route:'menulist'});
  }

  render(){
    const{ route, restaurant, searchfield }= this.state;
    const filteredRestaurants=restaurant.filter(restaurant =>{
      return restaurant.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return (
      <div className="App">
        { route ==='restlist'
          ? <div >
              <Logo searchChange={this.onSearchChange}/>
              <ParentRestList onRouteChange={this.onRouteChange} restaurant={filteredRestaurants}/>
            </div>
          : <Restaurant/>
        }
        
        {/*<Restaurant/>
        /* <Logo/>
        <Foot/>
        <RestList/>*/}
      </div>
    );
  }
}

export default App;
