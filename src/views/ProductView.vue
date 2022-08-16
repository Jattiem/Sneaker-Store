<template>
  <section  v-if="product"  class="product">
    <h2 class="h2">Product</h2>
    <div class="container">
    <div class="card bg-light" style="width: 18rem;">
      <img :src="product.img" class="card-img-top spin img-fluid center" alt="image">
        <div class="card-body bg-light">
          <h2 class="card-title1">{{product.title}}</h2>
          <h2 class="card-title">R{{product.price}}</h2>
          <!-- <h2 class="card-title">{{product.description}}</h2> -->
              <button class="btn btn-dark text-black">Add to Cart</button>
        </div>           
    </div>
    </div>
    <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><router-link class="page-link"  to="/products">Go back</router-link></li>
    <!-- <li class="page-item"><a class="page-link" href="/products">1</a></li>
    <li class="page-item"><a class="page-link" href="/">2</a></li>
    <li class="page-item"><a class="page-link" href="/about">3</a></li> -->
    <!-- <li class="page-item"><router-link class="page-link"  to="/register">Next</router-link></li> -->
  </ul>
</nav>
  </section>
  <div v-else>
    loading...
  </div>
</template>

<script>
export default {
	computed:{
		product(){
			return this.$store.state.singleproduct;
		}
	},
	mounted(){
		this.$store.dispatch('getSingleProducts', this.$route.params.id)
	},
  methods:{
  }
};
</script>

<style scoped>
button {
 color: #090909;
 padding: 0.7em 1.7em;
 font-size: 18px;
 border-radius: 0.5em;
 background: #e8e8e8;
 border: 1px solid #e8e8e8;
 transition: all .3s;
 box-shadow: 6px 6px 12px #c5c5c5,
             -6px -6px 12px #ffffff;
}

button:active {
 color: #666;
 box-shadow: inset 4px 4px 12px #c5c5c5,
             inset -4px -4px 12px #ffffff;
}
nav{
  display: flex;
  justify-content: center;
}
.page-link{
  color: rgba(0, 0, 0, 0.795);
  /* background-color: gray; */
}
.card{
  display: flex;
  margin-left: auto;
  margin-right: auto;
}
.card-title{
  padding-bottom: 1px;
}
img{
  object-fit: cover;
  height: 200px;
  width: 200px;
  align-items: center;
  margin-left: 50px;
}

section{
  margin-top: 100px;
  margin-bottom: 120px;
}

.h2{
  padding-top: 10px
}

.spin{
  transition: all 0.3s ease-in-out;
}

.spin:hover {
/* transition: .50s ease; */
/* transition-delay: .50s ease-out; */
transform: rotate(-20deg);
/* transition: transform .7s ease-in-out; */
}
</style>