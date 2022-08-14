<template>
  <section  v-if="product"  class="product">
    <h2 class="h2">Product</h2>
    <div class="container">
    <div class="card bg-light" style="width: 18rem;">
      <img :src="product.img" class="card-img-top spin img-fluid center" alt="image">
        <div class="card-body bg-light">
          <h2 class="card-title1">{{product.title}}</h2>
          <h2 class="card-title">R{{product.price}}</h2>
          <h2 class="card-title">{{product.description}}</h2>
              <button class="btn btn-dark text-white">Add to cart</button>
        </div>           
    </div>
    </div>
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
.container{
  /* margin-top: 10px; */
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