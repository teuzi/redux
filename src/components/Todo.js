import React, { Component } from 'react';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux'; 
import * as actions from '../redux/actions'; 

class Todo extends Component {
  render() {
    const { todos, actions } = this.props; 
    console.log(todos)

    const listTodos = todos.map((todo, key) => <li key={key}>{todo.text}</li>)
    return (
       <div>
            <h1>Todo</h1>  
            <ul>
                {listTodos}
            </ul>
            <input type="text" ref={input => this.text = input}/>
            <button onClick={() => actions.addTodo(this.text.value)}>Ajouter</button>
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
  )(Todo);
  