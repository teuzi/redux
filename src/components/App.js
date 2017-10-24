import React, { Component } from 'react';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux'; 
import * as actions from '../redux/actions'; 
import Counter from './Counter';

class App extends Component {

  render() {
    const { counter, actions } = this.props; 
    return (
      <div className="App">
        <h1>Bonjour</h1>
        <Counter />
        <button onClick={actions.increment}>increment</button>
      </div>
    );
  }
}

function mapStateToProps(state) { 
  return {
    counter: state.counter
    }; 
}

function mapDispatchToProps(dispatch) {
  return { 
    	actions: bindActionCreators(actions, dispatch) 
    };
} 

export default connect( 
  mapStateToProps, 
  mapDispatchToProps 
)(App);
