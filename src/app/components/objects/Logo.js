import React, {Component} from 'react';

/* Import Images */
import logo from '../../../assets/images/logo.svg';

class Logo extends Component {
  render() {
    return (<img src={logo} className="App-logo" alt="logo"/>)
  }
}

export default Logo;