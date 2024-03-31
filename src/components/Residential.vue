<template>

    <div class="body">
        <h1>Residential</h1><br>
        <span class="first">
            <img src="../assets/8.jpg" /> 
            <img src="../assets/10.jpg" />
        </span>
        <span>
            <img src="../assets/9.jpg" />
            <img src="../assets/11.jpg" />
        </span>
        <span>
            <img src="../assets/14.jpg" />
            <img src="../assets/15.jpg" />
        </span>
        <span>
            <img src="../assets/IMG_1589.jpg" />
            <img src="../assets/16.jpg" />
        </span>
        <span>
            <img src="../assets/res1.jpg"/>
            <img src="../assets/IMG_5538.JPG"/>
        </span>
        <span>
            <img src="../assets/IMG_1649.jpg"/>
            <img src="../assets/res3.jpg"/>
        </span>
    </div>
</template>

<script>


</script>

<style scoped>
span,
header {
    display: flex;
    justify-content: center;
    align-items: center;
}


img {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 40vh;
    width: 30vw;
    object-fit: cover;
    padding: 20px;
}

.body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 120px;
}
</style>
