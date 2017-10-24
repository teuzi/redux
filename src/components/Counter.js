import React, { Component } from 'react';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux'; 

class Counter extends Component {
  render() {
    const { counter, actions } = this.props; 
    return (
        <h1>{counter}</h1>
    );
  }
}

function mapStateToProps(state) { 
    return {
      counter: state.counter
      }; 
  }


export default connect( 
    mapStateToProps
  )(Counter);