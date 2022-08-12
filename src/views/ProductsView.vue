<template>
<Cards/>
</template>
<script>
import Cards from "../components/Cards.vue";

export default {
  computed:{
    // products(){
    //   return this.$store.state.products;
    // }
  },
  components: {
    Cards,
  },
  mounted(){
    //this.$store.dispatch('getProducts');
    // this.$store.dispatch('clearSingleProduct');
  }
};
</script>

<style scoped>

</style>