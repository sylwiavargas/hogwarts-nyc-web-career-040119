import React, { Component } from 'react'

export default class Filter extends Component {

  render() {
    console.log('filter props', this.props);
    return (
      <div>
        <label>Filter: </label>
        <select onChange={this.props.onFilterChange}>
          <option value={'all'}>All Hogs</option>
          <option value={'greased'}>Greased Hogs</option>
          <option value={'non-greased'}>Non-greased Hogs</option>
        </select>
      </div>
    )
  }

}
