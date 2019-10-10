import React, { Component } from 'react';
import HogCard from './HogCard'

export default class HogContainer extends Component {

  // state = {
  //   sortedHogs: []
  // }

  renderHogCards = hogs => {
    return hogs.map((hog, i) => {
      return < HogCard key={i}
                       hog={hog} />
    })
  }

  sortHogs = hogs => {
    if (this.props.sortBy === 'name') {
      return this.sortHogsByName(hogs)
    } else {
      return this.sortHogsByWeight(hogs)
    }
  }

  sortHogsByName = hogs => {
    return hogs.sort((hog1, hog2) => hog1.name.localeCompare(hog2.name))
  }

  sortHogsByWeight = hogs => {
    return hogs.sort((hog1, hog2) => hog2.weight - hog1.weight)
  }

  render() {
    console.log(this.props.hogs)
    console.log(this.sortHogsByName(this.props.hogs))
    return (
      <div>
        {this.renderHogCards(this.sortHogs(this.props.hogs))}
      </div>
    )
  }

}
