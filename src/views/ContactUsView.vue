

<template>
    <body>
        <h1>We'd Love to Hear from You!</h1>
        <h2>If you have any questions about our process, what pieces we have available in our warehouse (and/or in what dimensions) or would like to schedule an appointment to see for yourself, please leave your information in the form below and we'll reach out as soon as possible!</h2>
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
/* body {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
} */
</style>