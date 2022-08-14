<template>
<section class="about vh-100">
    <h2>About</h2>
    <p class="par">Sneakers (also called trainers, athletic shoes, tennis shoes, gym shoes, kicks, sport shoes, flats, running shoes, or runners) are shoes primarily designed for sports or other forms of physical exercise, but which are now also widely used for everyday casual wear.

Since their popularization by companies such as Converse, Nike and Spalding in the mid 20th century, they have become attire, with variety growing in many global markets exponentially. Like other parts of the global clothing industry, manufacture of shoes is heavily concentrated in Asia with nine in ten shoes produced in that region. 

Contemporary sneakers are largely made from synthetic materials, and the materials and manufacturing process produce, on average, about 14 kg (31 lb) of CO2 emissions.Some companies are trying to substitute more sustainable materials in their manufacture.About 90% of shoes end up in landfills at end of life</p>
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><router-link class="page-link"  to="/">Previous</router-link></li>
    <!-- <li class="page-item"><a class="page-link" href="/products">1</a></li>
    <li class="page-item"><a class="page-link" href="/">2</a></li>
    <li class="page-item"><a class="page-link" href="/about">3</a></li> -->
    <li class="page-item"><router-link class="page-link"  to="/products">Next</router-link></li>
  </ul>
</nav>
</section>
</template>
<style scoped>
section{
margin-top: 100px;    
}
h2{
    padding-top: 10px;
}
p{
    border: 1px solid gray;
    border-radius: 20px;
    /* margin: 150px; */
    margin-left: 150px;
    margin-right: 150px;
    display: flex;
    font-size: larger;
    justify-content: center;
    padding: 10px;
}
nav{
    display: flex;
    justify-content: center;
}
  @media only screen and (min-width:320px) and (max-width: 321px){
  p{
    width: 200px;
  }
  .par{
    /* margin-right: 300px; */
    margin-left: 60px;
  }
}
  @media only screen and (min-width:375px) and (max-width: 376px){
  p{
    width: 200px;
  }
  .par{
    /* margin-right: 300px; */
    margin-left: 90px;
  }
}
  @media only screen and (min-width: 425px) and (max-width: 426px){
  p{
    width: 200px;
  }
  .par{
    /* margin-right: 300px; */
    margin-left: 110px;
  }
}
</style>