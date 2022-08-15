import { createStore } from 'vuex'
import axios from 'axios';
import router from '@/router'

const moduleduoprojectUrl = "https://node-end-of-module-project.herokuapp.com/";
export default createStore({
  state: {
    products: null,
    singleproduct: null,
    users:null,

  },
  getters: {
    getUsers: state => state.users,
    getProducts: state => state.products
  },
  mutations: {
    setUsers(state, values) {
      state.users = values
    },

    setProducts(state, products){
      state.products = products;
    },
    setSingleProduct(state, singleproduct){
      state.singleproduct = singleproduct;
    }
  },
  actions: {

    // register
register: async(context, payload) => {
  const { user_fullname, email, password, phone_number, join_date } = payload;
  await fetch(moduleduoprojectUrl+"register", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      user_fullname: user_fullname,
      email: email,
      password: password,
      // userRole: userRole,
      phone_number: phone_number,
      join_date: join_date
    }),
  })
    .then((response) => response.json())
    .then((json) => context.commit("setUser", json), alert(`Your Registration was Successfull. Welcome!`));
},
// login
login: async(context, payload) => {
  const {  email, password } = payload;
  let result = await fetch(moduleduoprojectUrl+"login", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
  if(result){
    router.push({name: "home"})
    alert('WELCOME')
  } else {
    this.errMsg = `
    error`
  }
},


    async getProducts(context){
      let res = await axios.get(moduleduoprojectUrl+"products");
      let {results} = await res.data;
      if(results) {
        context.commit("setProducts", results);
      }

    },
    async getSingleProducts(context, id){
      // fetch('https://node-end-of-module-duo-project.herokuapp.com/products/' + id)
      let res = await axios.get(moduleduoprojectUrl+'products/' + id);
      let {results} = await res.data;
       context.commit('setSingleProduct', results[0]);
    }
  },


  login: async (context, payload) => {
    const { email, password } = payload;
    fetch(moduleduoprojectUrl+"login", {
      method: "PATCH",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-auth-token": await context.state.token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.msg);
        let user = data.user;
        let token = data.token;
        let cart = data.user.cart;
        context.commit("setuser", user);
        context.commit("setToken", token);
        context.commit("setcart", cart);
        // router.push({
        //   name: "products"
        // })
      });
  },
  modules: {
  }
})
