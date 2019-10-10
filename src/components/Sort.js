import React, { Component } from 'react'

export default class Sort extends Component {

  render() {
    console.log('filter props', this.props);
    return (
      <div>
        <label>Sort By: </label>
        <select onChange={this.props.onSortChange}>
          <option value={'name'}>Name</option>
          <option value={'weight'}>Weight</option>
        </select>
      </div>
    )
  }

}
