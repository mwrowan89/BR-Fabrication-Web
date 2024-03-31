<template>
    <div class="body">
        <h1>Commercial</h1>
        <br>
        <span>
            <img src="../assets/IMG_1779.jpg"/>
            <img src="../assets/IMG_1780.JPG"/>
        </span>
        <span>
            <img src="../assets/commercial1.jpg"/>
            <img src="../assets/commercial2.jpg"/>
        </span>
        <span class="first">
            <img src="../assets/7.jpg" />
            <img src="../assets/2.jpg" />
        </span>
        <span>
            <img src="../assets/3.JPG" />
            <img src="../assets/4.jpg" />
        </span>
        <span>
            <img src="../assets/5.jpg" />
            <img src="../assets/6.jpeg" />
        </span>
        <span>
            <img src="../assets/IMG_9586.JPG"/>
            <img src="../assets/comercial3.jpg"/>
        </span>
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
