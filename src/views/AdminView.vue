<template>
  <section v-if="products" class="admin vh-100">
  <div>
    <h2 class="h2">Admin</h2>
  </div>
    <table class="table align-middle mb-0 bg-white">
  <thead class="bg-light">
    <tr>
      <th>ID</th>
      <th>Title</th>
      <th>Category</th>
      <th>Description</th>
      <th>Image</th>
      <th>Price</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="product in products" :key="product.id" >
      <td>{{product.product_id}}</td>
      <td>{{product.title}}</td>
      <td>{{product.category}}</td>
      <td>{{product.description}}</td>
      <td><img :src="product.img" class="img-fluid" alt=""></td>
      <td>R {{product.price}}</td>
      <td><button class="btn btn-primary">Edit</button></td>
      <td><button class="btn btn-primary">Delete</button></td>
    </tr>
  </tbody>
</table>
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
  section{
    margin-top: 100px;
    /* margin-top: -200px; */
    margin-left: 20px;
    margin-right: 20px;
  }
  img{
    width: 100px;
    /* border: 1px solid gray; */
  }
</style>