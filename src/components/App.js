import React, { Component } from 'react';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux'; 
import * as actions from '../redux/actions'; 
import Counter from './Counter';
import Todo from "./Todo";

class App extends Component {

  render() {
    const { todos, actions } = this.props; 

    return (
      <div className="App">
        <h1>Bonjour { todos.length }</h1>
        <Counter />
        <button onClick={actions.increment}>increment</button>
        <Todo />
      </div>
    );
  }
}

function mapStateToProps(state) { 
  return {
    todos: state.todos
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
