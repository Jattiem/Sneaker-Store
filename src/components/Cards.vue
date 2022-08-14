<template>
<section class="products vh-100">
  <h2 class="h2">All Products</h2>
  <div class="container">
      <div v-if="products" class="row d-flex justify-content-center">
        <div v-for="product in products" :key="product.product_id" class="card mx-2 bg-light">
        <div class="bg-light">
          <img :src="product.img" class="spin card-img-top img-fluid cards" alt="image">
        </div>
          <div class="card-body">
            <h5 class="card-title">{{product.title}}</h5>
            <h5>R {{product.price}}</h5>
            <!-- <router-link class="btn btn-primary"  to="/singleproduct">View</router-link> -->          
            <!-- <router-link :to="{name:'singleProduct', params:{id:product.id}}"> -->
              <router-link :to="{name: 'singleProduct', params:{id: product.product_id}}">
                <button class="btn btn-dark text-white">View</button>
              </router-link>
          </div>
        </div>
      </div>
      <div v-else>Loading...</div>
  </div>
  <div class="bottom"></div>
</section>
</template>

<script>
export default {
    props: ["product"],

  computed:{
    products(){
      return this.$store.state.products;
    }
  },

 mounted(){
    this.$store.dispatch('getProducts');
    // this.$store.dispatch('clearSingleProduct');
  },
}
</script>

<style scoped>

.spin{
  transition: all 0.3s ease-in-out;
}

.spin:hover {
/* transition: .50s ease; */
/* transition-delay: .50s ease-out; */
transform: rotate(-20deg);
/* transition: transform .7s ease-in-out; */
}
  .cards{
    object-fit: cover;
    height: 150px;
    width: 300px;
    border-radius: 1px;
    border: 1px;
  }
  section{
    margin-top: 100px;
    /* padding-bottom: 100px; */
  }
  .card{
    height: 300px;
    width: 250px;
    margin-bottom: 10px;
  }
  .h2{
    padding-top: 10px;
  }
.bottom{
  padding-bottom: 100px;
}
@media only screen and (min-width:320px),(min-width:375px)  and (max-width: 321px),(min-width:376px) {
  .bottom{
  padding-bottom: 130px;
}
}
@media only screen and (min-width:768px)  and (max-width: 769px) {
  .bottom{
  padding-bottom: 100px;
}
}
@media only screen and (min-width:1024px)  and (max-width: 1026px) {
  .bottom{
  padding-bottom: 100px;
}

}
</style>