<template>
    <div class="body">
        <transition-group name="fade" tag="div">
            <div v-for="i in [currentIndex]" :key="i">
                <img :src="currentImg" alt="image" />
            </div>
        </transition-group>
        <a class="prev" @click="prev" href="#">&#10094; Previous</a>
        <a class="next" @click="next" href="#">&#10095; Next</a>
    </div>
</template>
<script>
import image1 from '@/assets/1.jpg';
import image2 from '@/assets/2.jpg';
// import image3 from '@/assets/3.JPG';
import image4 from '@/assets/4.jpg';
import image5 from '@/assets/5.jpg';
import image6 from '@/assets/6.jpeg';
import image7 from '@/assets/7.jpg';
import image8 from '@/assets/8.jpg';
// import image9 from '@/assets/9.JPG';
// import image10 from '@/assets/10.JPG';
// import image11 from '@/assets/11.jpg';
// import image12 from '@/assets/12.JPG';
// import image13 from '@/assets/13.JPG';
// import image14 from '@/assets/14.JPG';
// import image15 from '@/assets/15.JPG';
// import image16 from '@/assets/16.JPG';

export default {
    name: "Slider",
    data() {
        return {
            images: [
                image1, image2, image4, image5, image6, image7, image8
            ],
            timer: null,
            currentIndex: 0
        };
    },

    mounted: function () {
        this.startSlide();
    },

    methods: {
        startSlide: function () {
            this.timer = setInterval(this.next, 10000);
        },

        next: function () {
            this.currentIndex += 1;
        },
        prev: function () {
            this.currentIndex -= 1;
        }
    },

    computed: {
        currentImg: function () {
            return this.images[Math.abs(this.currentIndex) % this.images.length];
        }
    }
};
</script>

<style scoped>
.body {
    display: flex;
    justify-content: center;
    align-items: center;
}

.fade-enter-active,
.fade-leave-active {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 5s ease;
    overflow: hidden;
    visibility: visible;
    width: 100%;
    opacity: 1;
}

.fade-enter,
.fade-leave-to {
    visibility: hidden;
    width: 100%;
    opacity: 0;
}

img {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    width: 60vw;
    margin-bottom: 100px;
    margin-left: 150px;
    margin-top: 70px;
}

.prev,
.next {
    cursor: pointer;
    position: absolute;
    top: 40%;
    width: auto;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.7s ease;
    border-radius: 0 4px 4px 0;
    text-decoration: none;
    user-select: none;
}

.next {
    right: 0;
}

.prev {
    left: 0;
}

.prev:hover,
.next:hover {
    background-color: rgba(0, 0, 0, 0.9);
}
</style>