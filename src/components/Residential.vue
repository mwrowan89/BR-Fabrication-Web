<template>
    <div class="body">
        <h1>Residential</h1><br>
        <span class="first">
            <div class="image-container">
                <img src="../assets/images/res1.jpg" class="image" />
                <div class="description">Golden Acacia Cookie</div>
            </div>
            <div class="image-container">
                <img src="../assets/images/10.png" class="image" />
                <div class="description">Cerused Golden Acacia Dining Table</div>
            </div>
        </span>
        <span>
            <div class="image-container">
                <img src="../assets/images/IMG_1597.jpg" class="image" />
                <div class="description">Solid Oak Stained Intense Black</div>
            </div>
            <div class="image-container">
                <img src="../assets/images/11.jpg" class="image" />
                <div class="description">Makha Mirror</div>
            </div>
        </span>
        <span>
            <div class="image-container" >
                <img src="../assets/images/14.png" class="image" />
                <div class="description">Live Edge Natural Walnut</div>
            </div>
            <div class="image-container" >
                <img src="../assets/images/15.png" class="image"/>
                <div class="description">Solid Ash 86" Round Table</div>

            </div>
        </span>
        <span>
            <img src="../assets/images/IMG_1589.jpg" />
            <img src="../assets/images/16.png" />
        </span>
        <span>
            <img src="../assets/images/1.jpg" title="Golden Acacia table"/>
            <img src="../assets/images/res3.jpg" />
        </span>
        <span>
            <img src="../assets/images/IMG_1649.jpg" />
            <img src="../assets/images/9.png" />

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

img:hover {
    display: table-caption;
    transform: scale(1.1);
    transition: transform 0.3s ease;
}

.tooltip:hover:after {
    content: attr(title);
    display: block;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 5px;
    border-radius: 3px;
    z-index: 9999;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
}

.body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 120px;
}


.image-container {
    position: relative;
    display: flex;
}

.description {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 5px;
    border-radius: 3px;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.image-container:hover .description {
    opacity: 1;
}

</style>
