import React, { Component } from 'react';
import HogCard from './HogCard'
import Sort from './Sort'

export default class HogContainer extends Component {

  state = {
    sortBy: 'name'
  }

  // sortHogsByName = hogs => {
  //   return hogs.sort((hog1, hog2) => hog1.name.localeCompare(hog2.name))
  // }
  //
  // sortHogsByWeight = hogs => {
  //   return hogs.sort((hog1, hog2) => hog2.weight - hog1.weight)
  // }

  // sortAndRenderHogs = () => {
  //   const hogs = this.props.hogs
  //   const sortedHogs = this.state.sortBy === 'name'
  //           ? hogs.sort((hog1, hog2) => hog1.name.localeCompare(hog2.name))
  //           : hogs.sort((hog1, hog2) => hog2.weight - hog1.weight)
  //                 // ? this.sortHogsByName(hogs)
  //                 // : this.sortHogsByWeight(hogs)
  //   // console.log(this.state.filteredHogs);
  //   // console.log(this.props.hogs);
  //   // console.log(hogs, sortedHogs);
  //   // console.log(sortedHogs);
  //   return this.renderHogCards(sortedHogs);
  // }

  onSortChange = evt => {
    // console.log(evt.target.value);
    this.setState({
      sortBy: evt.target.value
    })
  }

  sortHogs = () => {
    const hogs = this.props.hogs
    return this.state.sortBy === 'name'
            ? hogs.sort((hog1, hog2) => hog1.name.localeCompare(hog2.name))
            : hogs.sort((hog1, hog2) => hog2.weight - hog1.weight)
  }

  renderHogCards = () => {
    const sortedHogs = this.sortHogs()
    return sortedHogs.map((hog, i) => {
      return < HogCard key={i}
      hog={hog} />
    })
  }

  render() {
    // console.log(this.props.hogs)
    // console.log(this.sortHogsByName(this.props.hogs))
    return (
      <div>
        < Sort onSortChange={this.onSortChange}/>
        {this.renderHogCards()}
      </div>
    )
  }

}
