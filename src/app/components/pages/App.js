/* Dependencies */
import React, {Component} from 'react';

/* Components */
import Header from '../components/Header';
import Date from '../components/Date';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Do you wanna see our friend Redux working? there's a timer above updating via Redux!</p>
        <Date />
      </div>
    );
  }
}

export default App;
