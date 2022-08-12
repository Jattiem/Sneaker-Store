<template>
    <section class="home vh-100">
        <div id="title" class="container  d-flex justify-content-center align-items-center flex-column h-100">
            <h2 class="text-center">Hi</h2>
            <h2 class="text-center">Welcome to</h2>
            <h2 class="text-center">
              Sneakers
            </h2>
        <router-link class="button" to="./about">See More</router-link>
        </div> 
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
h2{
    color: black;
    /* font-style: bold; */
    /* font-display: b; */
    /* position: fixed; */
    /* position: sticky; */
}
.home {
  background: url(https://i.postimg.cc/q7tP1wv5/600fb10351f585760973c5d23174f5a8.webp),
   linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
  background-blend-mode: overlay;
  /* background-size: cover; */
  background-position: center center;
  background-attachment: fixed; 
  /* margin-bottom: 50%; */
  /* padding-bottom: 30%; */
}
</style>