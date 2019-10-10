import React from 'react'

const Filter = props => {

  // render() {
    // console.log('filter props', this.props);
    return (
      <div>
        <label>Filter: </label>
        <select onChange={props.onFilterChange}>
          <option value={'all'}>All Hogs</option>
          <option value={'greased'}>Greased Hogs</option>
          <option value={'non-greased'}>Non-greased Hogs</option>
        </select>
      </div>
    )
  }

// }

export default Filter
