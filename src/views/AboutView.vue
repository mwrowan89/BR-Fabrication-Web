
<template>
  <div class="about">
    <img src="../assets/BenSanding.jpg" height="800vh" width="600vw">
    <h1>From Chef to Table creates one-of-a-kind, American made heirloom quality slab tables and furniture for commercial and residential spaces.
      Founder Ben Rioux hails from a long line of woodworkers in Maine and spent many years in NYC cooking for some of the
      biggest outfits in the culinary industry (Executive Chef at NY Stock Exchange, La Grenouille). Now, rather than
      creating dishes, he harvests the unique pieces on which they're served.
    </h1>
  </div>
</template>

<script>

export default {
  components: {

  }
}
</script>

<style scoped>
.about {
  display: flex;
  margin: 50px;
}

h1 {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  position: relative;
  margin: 0 auto 2rem;
}

nav {
  display: flex;
  justify-content: center;
  /* justify-content: space-around; */
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
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
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




<!-- <style>





@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style> -->
