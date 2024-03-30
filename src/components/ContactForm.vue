<template>
    
    <div class="contact">
        <form>
    <div class="form-element"> 
      <label for="first">First Name</label>
      <input id="first-name" type="text" placeholder="First Name"/>
    </div>
    <div class="form-element" id="last">
      <label for="last">Last Name</label>
      <input id="last-name" type="text" placeholder="Last Name"/>
    </div>
    
    <div class="form-element">
      <label for="question">Question</label>
      <textarea id="question"></textarea>
    </div>
    <input type="submit" value="Save" />
    <input type="button" value="Cancel" />
  </form>
    </div>
</template>

<script>
// export default {
//     components: {
//         ContactForm
//     }
// }

</script>

<style scoped>
.contact {
    display: flex;
    width: 30vw;
    font-size: 2.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    place-items: center;
}

input {
    align-items: center;
    justify-content: center;
}

.form-element {
  margin-top: 10px;
  place-items: center;
}

.form-element label {
  display: block;
}

.form-element input,
.form-element select {
  height: 30px;
  width: 300px;
}

.form-element textarea {
  height: 60px;
  width: 300px;
}

form input[type=button] {
  width: 100px;
}

form input[type=submit] {
  width: 100px;
  margin-right: 10px;
}
</style>