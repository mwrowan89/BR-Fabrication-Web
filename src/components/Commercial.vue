<template>
    <div class="body">
        <br><br><br>
        <h1>Commercial</h1>
        <br>
        <span>
            <img src="../assets/images/IMG_1779.jpg" />
            <img src="../assets/images/IMG_1780.JPG" />
        </span>
        <span>
            <img src="../assets/images/commercial1.jpg" />
            <img src="../assets/images/commercial2.jpg" />
        </span>
        <span class="first">
            <img src="../assets/images/7.jpg" />
            <img src="../assets/images/2.jpg" />
        </span>
        <span>
            <img src="../assets/images/3.JPG" />
            <img src="../assets/images/4.jpg" />
        </span>
        <span>
            <img src="../assets/images/5.jpg" />
            <img src="../assets/images/6.jpeg" />
        </span>
        <span>
            <img src="../assets/images/IMG_9586.JPG" />
            <img src="../assets/images/comercial3.jpg" />
        </span>
        <br><br>
        <h2>
            <RouterLink to="/gallery">Back to Gallery</RouterLink>
        </h2>
        <br><br>
    </div>
</template>


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
