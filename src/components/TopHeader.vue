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
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Welcome to The World Leader in Cool Shit &nbsp;
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> &nbsp; || &nbsp;
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  width: 70vw;
  font-weight: 500;
  font-size: 5.6rem;
  position: center;
  top: -10px;
}

h3 {
  font-size: 2.2rem;
}


.greetings h1,
.greetings h3 {
  display: flex;
  justify-content: center;
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
