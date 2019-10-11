import React, { Component } from 'react';

export default class HogCard extends Component {

  // getImgUrl = name => {
  //   let slug = name.split(' ').join('_').toLowerCase();
  //   console.log(slug);
  //   console.log('../hog-imgs/' + slug + '.jpg');
  //   return `../hog-imgs/${slug}.jpg`
  // }

  state = {
    clicked: false
  }

  onHogCardClick = () => {
    this.setState({
      clicked: !this.state.clicked
    }/*, () => console.log(this.state.clicked)*/)
  }

  displayHogDetails = () => {
    // console.log(this.state.clicked);
    const { weight, specialty, greased, 'highest medal achieved': highestMedalAchieved } = this.props.hog 
    if (this.state.clicked) {
      return (
        <ul>
          <li>Specialty: {specialty}</li>
          <li>Greased: {`${greased}`}</li>
          <li>Weight: {weight}</li>
          <li>Highest Medal Achieved: {highestMedalAchieved}</li>
        </ul>
      )
    }
  }

  render() {
    // console.log(this.props);
    // console.log(this.props.onHogCardClick);
    const { name } = this.props.hog
    const slug = name.split(' ').join('_').toLowerCase() 
    // console.log(name, weight, specialty, greased, highestMedalAchieved);
    return (
      <div>
        <p>{name}</p>
        <img src={require(`../hog-imgs/${slug}.jpg`)} alt="hog" onClick={this.onHogCardClick}/>
        { this.displayHogDetails() }
      </div>
    )
  }

}
