import React, { Component } from 'react';
import { getDate } from '../../actions/dateAction';

class Date extends Component {
  render() {
    return (
      <div className="Date">
        <h3>{this.props.date}</h3>
        <button onClick={getDate}>Get Tempo</button>
      </div>
    );
  }
}

Date.propTypes = {
	dispatch: React.PropTypes.func.isRequired,
  date: React.PropTypes.date.isRequired
};

export default connect((state) => {
	return {
		date: state.date
	};
})(Date);
