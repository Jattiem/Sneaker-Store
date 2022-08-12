import { createStore } from 'vuex'
import axios from 'axios';

const moduleduoprojectUrl = "https://node-end-of-module-duo-project.herokuapp.com/";
export default createStore({
  state: {
    products: null,
    singleproduct: null,

  },
  getters: {
  },
  mutations: {
    setProducts(state, products){
      state.products = products;
    },
    setSingleProduct(state, singleproduct){
      state.singleproduct = singleproduct;
    }
  },
  actions: {

    async getProducts(context){
      let res = await axios.get("https://node-end-of-module-duo-project.herokuapp.com/products");
      let {results} = await res.data;
      if(results) {
        context.commit("setProducts", results);
      }

    },
    async getSingleProducts(context, id){
      // fetch('https://node-end-of-module-duo-project.herokuapp.com/products/' + id)
      let res = await axios.get('https://node-end-of-module-duo-project.herokuapp.com/products/' + id);
      let {results} = await res.data;
       context.commit('setSingleProduct', results[0]);
    }
  },


  login: async (context, payload) => {
    const { email, password } = payload;
    fetch("https://node-end-of-module-duo-project.herokuapp.com/login", {
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
