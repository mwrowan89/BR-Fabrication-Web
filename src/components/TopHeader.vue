<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green" v-on:click="">{{ msg }}</h1><br>
    <h3><strong>Heirloom Quality Furniture for Commercial & Residential Spaces <br>
</strong>
      <!-- Heirloom Quality Furniture for Commercial & Residential Spaces <br> -->
      <div class="links">
        <a href="https://www.instagram.com/fromcheftotable/" target="_blank" rel="noopener"><img id="insta" src="../assets/images/Screenshot (19).png" width="50" height="50"/></a> &nbsp; || &nbsp;
        <a href="https://www.facebook.com/fromcheftotable/?locale=it_IT" target="_blank" rel="noopener"><img src="../assets/images/facbook logo11.png" width="35" height="35"></a>
      </div>
    </h3>
  </div>
</template>

<style scoped>

h1 {
  width: 70vw;
  font-weight: 500;
  font-size: 5.6rem;
  top: -10px;
}

h3 {
  font-size: 2.2rem;
}

.greetings {
  width: 90vw;
  text-align: center;
  display: inline-block;
  justify-content: center;
  background-image: url('../assets/images/13.JPG');
  background-repeat: none;
  background-size: 100%;
}


.greetings h1,
.greetings h3 {
  display: inline-block;
  justify-content: center;
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    display: inline;
    text-align: center;
  }
}

.links {
  display: flex;
  justify-content: center;
  align-items: center;
}

a {
  display: flex;
  justify-content: center;
}

#insta {
  margin-top: 4px;
}

</style>
