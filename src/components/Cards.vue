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
                <button id="viewproduct" class="btn btn-dark text-white w-5" >View</button>
                <br>
                <button id="add" class="btn btn-dark text-white">Add to Cart</button>
              </router-link>
          </div>
        </div>
      </div>
      <div v-else>Loading...</div>
      <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><router-link class="page-link"  to="/">Previous</router-link></li>
    <!-- <li class="page-item"><a class="page-link" href="/products">1</a></li>
    <li class="page-item"><a class="page-link" href="/">2</a></li>
    <li class="page-item"><a class="page-link" href="/about">3</a></li> -->
    <li class="page-item"><router-link class="page-link"  to="/login">Next</router-link></li>
  </ul>
</nav>
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
#viewproduct{
  width: 109px;
  margin-bottom: 10px;
}
.page-link{
  color: rgba(0, 0, 0, 0.795);
  /* background-color: gray; */
}
h2{
  margin-top: 160px;
}
nav{
    display: flex;
    justify-content: center;
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
.products{
  background-color: #ffffff;
background-image: url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%23000000' fill-opacity='0.24'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") no-repeat center center fixed;
background-size: cover;

}

  .card{
    height: 330px;
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