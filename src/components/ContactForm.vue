<template>
  <div class="contact">
    <form>
      <div class="form-element">
        <label for="first">First Name</label>
        <input id="first-name" type="text" placeholder="First Name" />
      </div>
      <div class="form-element" id="last">
        <label for="last">Last Name</label>
        <input id="last-name" type="text" placeholder="Last Name" />
      </div>

      <div class="form-element">
        <label for="question">Question</label>
        <textarea id="question"></textarea>
      </div>
      <span>
        <input id="submit" type="submit" value="Save" />
        <input id="cancel" type="button" value="Cancel" />
      </span>

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
  font-size: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  place-items: center;
}

.form-element {
  margin-top: 10px;
  place-items: center;
}

.form-element label {
  display: flex;
  justify-content: center;
  place-items: center;
}

.form-element input,
.form-element select {
  height: 50px;
  width: 30rem;
}

.form-element textarea {
  height: 100px;
  width: 30rem;
}
span {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
}
#submit,
#cancel {
  width: 15rem;
  height: 2rem;
}

form input[type=button] {
  width: 100px;
}

form input[type=submit] {
  width: 100px;
  margin-right: 10px;
}
</style>