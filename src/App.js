import React, { Component } from 'react';
import './App.css';//for font family and background
import Clarifai from 'clarifai';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

const app = new Clarifai.App({
  apiKey: '9f61eaa3458f43429dc92059903b2bdf'
 });

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {}
    }
  }

  onInputChange = (e) => {
    this.setState({input: e.target.value});
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.querySelector('#inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      leftRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)

    }
  }

  displayFaceBox = (box) => {
    this.setState({box});
  }
  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err=>console.log(err));

  }
  render() {
    return (
      <div className="App">
      <Particles className='particles' params={{
        particles: {
          number:{value:100, density:{enable: true, value_area: 800}},

        }
      }} />
          <Navigation />
          <Logo />
          <Rank />
          <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        
          <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
