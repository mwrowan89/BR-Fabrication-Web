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
    <h1 class="green">{{ msg }}</h1> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <h3>
      Heirloom Quality Furniture for Commercial & Residential Spaces <br>
      <a id="insta" href="https://www.instagram.com/fromcheftotable/" target="_blank" rel="noopener">Instagram</a> &nbsp; || &nbsp;
      <a href="https://www.facebook.com/fromcheftotable/?locale=it_IT" target="_blank" rel="noopener">FaceBook</a>
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
  width: 80vw;
  text-align: center;
  display: inline-block;
  justify-content: center;
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

#insta {
  font-family: "Edu QLD Beginner", cursive;
  font-optical-sizing: auto;
  font-weight: weight;
  font-style: normal;
}
</style>
