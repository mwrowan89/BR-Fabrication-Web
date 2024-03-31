<template>
    <header>
        <RouterLink to="/residential">
            <h1>Residential</h1>
        </RouterLink>
        &nbsp;&nbsp;||&nbsp;&nbsp;
        <RouterLink to="/commercial">
            <h1>Commercial</h1>
        </RouterLink>
    </header>
    <Residential />
    <Commercial />
</template>

<script>
import Residential from '../components/Residential.vue';
import Commercial from '../components/Commercial.vue';

export default {
    components: {
        Residential,
        Commercial
    }
}
</script>

<style scoped>
header {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
}

h1 {
    font-size: 1.5rem;
}
</style>