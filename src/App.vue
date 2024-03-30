<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TopHeader from './components/TopHeader.vue'
</script>

<template>
  <body>
    <header id="header">
      <img alt="BR logo" class="logo" src="../src/assets/Tree.jpeg" width="200" height="200" />

      <div class="wrapper">
        <TopHeader msg="BR Fabrication" />

        
      </div>
    </header>
    <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/gallery">Gallery</RouterLink>
          <RouterLink to="/contactUs">Contact Us</RouterLink>
        </nav>

    <RouterView />

  </body>
</template>

<style scoped>
/* body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 
    "header header"
    "main main main"
    "main main main"
    "main main main"
    ;
    height: 100vh;
    row-gap: 20px;
    column-gap: 50px;
    text-align: center;
} */

header {
  border: 5px solid white;
  border-radius: 10px;
  padding: 20px;
  margin-top: 70px;
  align-items: center;
  line-height: 1.5;
  max-height: 100vh;
  width: 70vw;
}

.logo {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* margin: 0 auto 2rem; */
  padding: 10px;
}

nav {
  display: flex;
  justify-content: center;
  /* justify-content: space-evenly; */
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  .logo {
    justify-content: flex-end;
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    width: 50vw;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
