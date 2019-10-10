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
    let filteredHogs = hogs;
    if (evt.target.value === 'greased') {
      filteredHogs = hogs.filter(hog => hog.greased === true)
    } else if (evt.target.value === 'non-greased') {
      filteredHogs = hogs.filter(hog => hog.greased === false)
    }
    this.setState({
      filteredHogs
    }/*, () => console.log('app state', this.state)*/)
  }

  render() {
    // console.log('app state', this.state);
    return (
      <div className="App">
        < Nav />
      < Filter onFilterChange={this.onFilterChange}/>
      < HogContainer hogs={this.state.filteredHogs} />
      </div>
    )
  }
}

export default App;
