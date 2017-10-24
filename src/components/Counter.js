import React, { Component } from 'react';
import { connect } from 'react-redux'; 

class Counter extends Component {
  render() {
    const { counter } = this.props; 
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