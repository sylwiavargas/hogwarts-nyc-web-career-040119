import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer'
import Filter from './Filter'

class App extends Component {

  state = {
    filteredHogs: hogs
  }

  onFilterChange = evt => {
    // console.log(evt);
    // console.log(evt.target);
    // console.log(evt.target.value);
    // if (evt.target.value === 'greased') {
    //   filteredHogs = hogs.filter(hog => hog.greased === true)
    // } else if (evt.target.value === 'non-greased') {
    //   filteredHogs = hogs.filter(hog => hog.greased === false)
    // }
    let filteredHogs = this.filterHogs(evt);
    this.setState({
      filteredHogs
    }/*, () => console.log('app state', this.state)*/)
  }

  filterHogs = evt => {
    // console.log(evt.target.value);
    
    // const value = evt.target.value 
    // switch (value) {
    // case 'greased':
    //  return hogs.filter(hog => hog.greased === true)
    // case 'non-greased':
    //  hogs.filter(hog => hog.greased === false)
    //    default:
    //  return hogs;
    // }
    
    if (evt.target.value === 'greased') {
      return hogs.filter(hog => hog.greased === true)
    } else if (evt.target.value === 'non-greased') {
      return hogs.filter(hog => hog.greased === false)
    } else {
      return hogs
    }
  }

  render() {
    // console.log('app state', this.state);
    return (
      <div className="App">
        < Nav />
      < Filter onFilterChange={this.onFilterChange} />
      < HogContainer hogs={this.state.filteredHogs} />
      </div>
    )
  }
}

export default App;
