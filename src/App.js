import React, { Component } from 'react';
import './App.css';//for font family and background
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';

 const particleOption = {
  particles: {
    number:{
          value:200, 
          density:{
                  enable: true, 
                  value_area: 800
                }
          },
  }
 };

class App extends Component {
  
  constructor() {
      super();
      this.state = {
        input: '',
        imageUrl: '',
        box: {},
        route: 'signin',
        isSignedIn: false,
        user: {
          name: '',
          id: '',
          email: '',
          entries: 0,
          joined: ''
        }
      }
  }
  
  onInputChange = (e) => {
    this.setState({input: e.target.value});
  }

  loadUser = (data) => {
    this.setState({user:data});
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
    fetch('https://secure-hollows-88337.herokuapp.com/imageurl', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({input:this.state.input})
        })
        .then(data=>data.json())
    .then(response => {
        fetch('https://secure-hollows-88337.herokuapp.com/image', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({id:this.state.user.id})
        }).then(response=>response.json())
        .then(data=>{
          this.setState({user:{...this.state.user, entries: data}});
        })
        this.displayFaceBox(this.calculateFaceLocation(response))
      
      })
    .catch(err=>{console.log(err)});

  }

  onRouteChange = (route) => {
    if(route === 'home') {
      this.setState({isSignedIn: true});
    } else if(route === 'signin' || route === 'register') {
      this.setState({isSignedIn: false})
    }
    this.setState({route});
  }

  render() {
    const {isSignedIn, box, imageUrl, route } = this.state;
    return (
      <div className="App">
        <Particles className='particles' params={particleOption} />

          <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn}/>
          {
            route === 'home' 
            ? (
              <div>
                <Logo />
                <Rank name={this.state.user.name} entries={this.state.user.entries}/>
                <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
                <FaceRecognition box={box} imageUrl={imageUrl}/> 
              </div>
            )
            : (
              this.state.route === 'signin' 
              ? <Signin 
                    loadUser={this.loadUser}
                    onRouteChange={this.onRouteChange} />
              : <Register 
                    loadUser={this.loadUser}
                    onRouteChange={this.onRouteChange} />
            ) 
          }
      </div>
    );
  }
}

export default App;
