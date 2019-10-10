import React from 'react'

const Sort = props => {

  // render() {
    // console.log('filter props', this.props);
    return (
      <div>
        <label>Sort By: </label>
        <select onChange={props.onSortChange}>
          <option value={'name'}>Name</option>
          <option value={'weight'}>Weight</option>
        </select>
      </div>
    )
  }

// }
 export default Sort
