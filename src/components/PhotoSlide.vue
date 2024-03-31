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

import image1 from '@/assets/images/1.jpg';
import image2 from '@/assets/images/2.jpg';
import image3 from '@/assets/images/9.jpeg';
import image4 from '@/assets/images/4.jpg';
import image5 from '@/assets/images/5.jpg';
import image6 from '@/assets/images/6.jpeg';
import image7 from '@/assets/images/7.jpg';
import image8 from '@/assets/images/8.jpg';
import image9 from '@/assets/images/commercial1.jpg';
import image10 from '@/assets/images/commercial2.jpg';
import image11 from '@/assets/images/11.jpg';
import image12 from '@/assets/images/IMG_1589.jpg';
import image14 from '@/assets/images/IMG_1649.jpg';
import image15 from '@/assets/images/bakan1.png';
import image16 from '@/assets/images/bakan2.png';
import image17 from '@/assets/images/9.png';
import image18 from '@/assets/images/10.png';
import image20 from '@/assets/images/12.png';
import image21 from '@/assets/images/13.png';
import image22 from '@/assets/images/14.png';
import image23 from '@/assets/images/15.png';
import image24 from '@/assets/images/16.png';

export default {
    name: "Slider",
    data() {
        return {
            images: [
                image16,image18,image15,image21,image17,image23,image20,image24,image12,image14,
                image10, image9, image11, image3, image2, image6, image4, image5, image7, image1, image8,image22
        
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
            this.timer = setInterval(this.next, 5000);
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
    transition: all 1s ease;
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
    object-fit: contain;
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
    margin: 60px;
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