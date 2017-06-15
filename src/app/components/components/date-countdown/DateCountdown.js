/* Dependencies */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* Actions */
import * as dateActions from '../../../actions/date';

class DateCountdown extends Component {
  tick() {
    this.props.actions.getDate();
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <p>Date: {this.props.date ? this.props.date.toUTCString() : ''}</p>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    date: state.date.date ? state.date.date : '',
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(dateActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DateCountdown);