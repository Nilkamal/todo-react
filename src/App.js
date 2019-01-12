import React, { Component } from 'react';
import './App.css';//for font family and background
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';

class App extends Component {
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
          <ImageLinkForm />
        
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
