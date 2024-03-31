

<template>
    <body>
        <h1>We'd Love to Hear from You!</h1><br><br>
        <h2>If you have any questions about our process, what pieces we have available in our warehouse (and/or in what dimensions) or would like to schedule an appointment to see for yourself, please leave your information in the form below and we'll reach out as soon as possible!</h2>
        <br><br>
        <ContactForm />
    </body>
</template>

<script>
import ContactForm from '../components/ContactForm.vue'

export default {
    components: {
        ContactForm
    }
}
</script>

<style scoped>

h1 {
    margin-top: 40px;
    font-size: 2.5rem;
}

h2 {
    display: flex;
    justify-content: center;
    margin-left: 150px;
    margin-right: 150px;
    font-size: 1rem;
}
body {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
} 
</style>