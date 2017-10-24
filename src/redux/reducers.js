import { combineReducers } from 'redux'
import { ADD_TODO } from './actions'

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
      
    default:
      return state
  }
}

function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        default:
            return state
    }
}

const todoApp = combineReducers({
  todos,
  counter
})

export default todoApp