<template>
<Navbar/>
  <section v-if="products" class="admin vh-100">
    <h2 class="h2 pt-2">Admin</h2>
    <a href="" class="add">Add product</a>
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
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.product_id }}</td>
          <td>{{ product.title }}</td>
          <td>{{ product.category }}</td>
          <td class="des">{{ product.description }}</td>
          <td><img :src="product.img" class="img-fluid" alt="" /></td>
          <td>R {{ product.price }}</td>
          <td><a href="" class="iconadmin bi bi-pencil-square"></a></td>

          <td>
            <button
              id="delete"
              v-on:click="$store.dispatch('deleteProduct', product.product_id)"
            >
              <a class="iconadmin bi bi-x-square"></a>
            </button>
          </td>

        </tr>
      </tbody>
    </table>
  </section>
            <!-- <div v-else>Hello</div> -->
</template>

<script>
import Navbar from '@/components/Navbar.vue';
export default {
  props: ["product"],
  mounted() {
    this.$store.dispatch("getProducts");
    // this.$store.dispatch('clearSingleProduct');
  },

  computed: {
    products() {
      return this.$store.state.products;
    },
  },
    components: { Navbar }
};
</script>

<style scoped>
#delete{
  border: none;
  background: none;
}
.des {
  width: 40%;
}

a {
  color: black;
}

h2 {
  margin-top: 160px;
}

/* nav{
  display: flex;
  justify-content: center;
} */
.add {
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  /* margin-bottom: 40px; */
  padding-bottom: 10px;
  text-decoration: none;
}

.iconadmin {
  font-size: x-large;
}

section {
  margin-top: 100px;
  /* margin-top: -200px; */
  margin-left: 20px;
  margin-right: 20px;
  /* margin-bottom: 300px; */
}

img {
  width: 100px;
  /* border: 1px solid gray; */
}

@media only screen and (min-width: 320px) and (max-width: 321px) {
  tr {
    display: flex;
    flex-direction: column;
    margin-bottom: 140px;
  }
} ;
</style>