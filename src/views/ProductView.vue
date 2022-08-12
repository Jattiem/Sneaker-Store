<template>
  <section  v-if="product"  class="product vh-100">
    <h2 class="h2">Product</h2>
    <div class="card bg-light" style="width: 18rem;">
      <img :src="product.img" class="card-img-top spin img-fluid" alt="image">
        <div class="card-body bg-light">
          <h2 class="card-title">{{product.title}}</h2>
          <h2 class="card-title">R{{product.price}}</h2>
          <h2 class="card-title">{{product.description}}</h2>
              <!-- <button class="btn btn-primary">Add to Cart</button> -->
        </div>
                <button class="btn btn-dark text-white">Add to cart</button>
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

.card{
  display: flex;
  margin-left: auto;
  margin-right: auto;
}

img{
  object-fit: cover;
}
section{
  margin-top: 100px;
}

h1{
  margin-top: 150px
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