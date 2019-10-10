import React, { Component } from 'react';

export default class HogContainer extends Component {

  // getImgUrl = name => {
  //   let url = name.split(' ').join('_').toLowerCase();
  //   console.log(url);
  //   console.log('../hog-imgs/' + url + '.jpg');
  //   return `../hog-imgs/${url}.jpg`
  // }

  state = {
    clicked: false
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

  onHogCardClick = () => {
    this.setState({
      clicked: !this.state.clicked
    }/*, () => console.log(this.state.clicked)*/)
  }

  render() {
    console.log(this.props);
    // console.log(this.props.onHogCardClick);
    const { name, weight, specialty, greased, 'highest medal achieved': highestMedalAchieved } = this.props.hog
    console.log(name, weight, specialty, greased, highestMedalAchieved);
    return (
      <div>
        <p>{name}</p>
        <img src={require(`../hog-imgs/${name.split(' ').join('_').toLowerCase()}.jpg`)} alt="pig image" onClick={this.onHogCardClick}/>
        { this.displayHogDetails() }
      </div>
    )
  }



}
