import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer'

class App extends Component {

  state = {
    filteredHogs: hogs,
    sortBy: 'name'
  }

  onFilterChange = evt => {
    // console.log(evt);
    // console.log(evt.target);
    // console.log(evt.target.value);
    let filteredHogs;
    if (evt.target.value === 'greased') {
      filteredHogs = filteredHogs.filter(hog => hog.greased === true)
    } else if (evt.target.value === 'non-greased') {
      filteredHogs = filteredHogs.filter(hog => hog.greased === false)
    }
    this.setState({
      filteredHogs = hogs;
    }/*, () => console.log('app state', this.state)*/)
  }

  onSortChange = evt => {
    console.log("on sort change value here", evt.target.value);
    this.setState({
      sortBy: evt.target.value
    })
  }


  render() {
    // console.log('app state', this.state);
    return (
      <div className="App">
        < Nav onFilterChange={this.onFilterChange}
              onSortChange={this.onSortChange}
        />
        < HogContainer hogs={this.state.filteredHogs}
                       sortBy={this.state.sortBy}
        />
      </div>
    )
  }
}

export default App;
