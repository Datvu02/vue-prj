import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // Khai báo global state
    count: 1,
    text: '',
    todos: [
        { index: 1, name: 'task 1', done: true},
        { index: 2, name: 'task 2', done: false},
        { index: 3, name: 'task 3', done: true},
        { index: 4, name: 'task 4', done: true},
    ]
  },
  getters: {
    doneTodos: state => {
        return state.todos.filter(todo => !todo.done)
    },
    lengthDoneTodos: (state, getters) => {
        return getters.doneTodos.length
    },
    findTodoById: (state) => (index) => {
        console.log(state.todos)
        return state.todos.find(todo => todo.index === index)
    }
  },
  mutations: {
    // Khai báo mutations
    increment(state, input){
        state.count += input.number;
        // console.log(input.number);
    }
  }
})

export default store