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
    ], 
    carts:[],
    // products: [
    //   {
    //       id: 1,
    //       name: 'iPhone 12 Pro Max Chính Hãng',
    //       image: 'https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg',
    //       price: 32990000,
    //       quantity: 566,
    //   },
    //   {
    //       id: 2,
    //       name: 'iPhone 12 Chính Hãng (VN/A)',
    //       image: '',
    //       price: 21790000,
    //       quantity: 123,
    //   },
    //   {
    //       id: 3,
    //       name: 'iPhone 11 Chính hãng',
    //       image: 'https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg',
    //       price: 16690000,
    //       quantity: 5,
    //   },
    //   {
    //       id: 4,
    //       name: 'Apple iPhone XR 64GB Chính hãng(VN/A)',
    //       image: 'https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg',
    //       price: 12190000,
    //       quantity: 1023,
    //   },
    //   {
    //       id: 5,
    //       name: 'iPhone 11 Pro Max Chính hãng(VN/A)',
    //       image: '',
    //       price: 26500000,
    //       quantity: 6,
    //   }
    // ],
    totalMoney: '',
    name: '',
    price: '',
    quantity: '',
    data: '',
    products: [],
    drag: [],
    errorName: false,
    errorPrice: false,
    errorQuantity: false,
    ButtonName: 'Tạo mới'
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
    increment(state, input){
        state.count += input.number;
    },
    increase (state,data) {
      state.carts.push(data)
    },
    deleteCart(state,id) {
      state.carts.splice(id, 1);

    },
    updateTotalMoney: (state, value) => {
        state.totalMoney = value
    },
    
    updateName: (state, value) => {
        state.name = value
    },
    updatePrice: (state, value) => {
        state.price = value
    },
    updateQuantity: (state, value) => {
        state.quantity = value
    },
    updateData: (state, value) => {
        state.data = value
    },
    updateProducts: (state, value) => {
        state.products.push(value)
    },
    updateDrag: (state, value) => {
        state.drag = value
    },
    updateErrorName: (state, value) => {
        state.errorName = value
    },
    updateErrorPrice: (state, value) => {
        state.errorPrice = value
    },
    updateErrorQuantity: (state, value) => {
        state.errorQuantity = value
    },
    updateCodeProduct: (state, value) => {
        state.codeProduct = value
    },
  }
})

export default store