/* Dependencies */
import React, {Component} from 'react';

/* Components */
import Logo from '../../objects/logo/Logo';

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <Logo />
        <h2>Welcome to React</h2>
      </div>
    )
  }
}

export default Header;