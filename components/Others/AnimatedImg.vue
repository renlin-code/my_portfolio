<template>
  <div class="animated-img">
    <div class="animated-img__words">
      <span class="word1">SASS/SCSS</span>
      <span class="word2">&#60/&#62</span>
      <span class="word3">Vue.js</span>
      <span class="word4">( )</span>
      <span class="word5">CSS3</span>
      <span class="word6">]</span>
      <span class="word7">&#60</span>
      <span class="word8">HTML5</span>
      <span class="word9">;</span>
      <span class="word10">{ }</span>
      <span class="word11">JavaScript</span>
      <span class="word12">Nuxt.js</span>
      <span class="word13">{</span>
      <span class="word14">/</span>
      <span class="word15">&#60/&#62</span>
    </div>
    <figure>
      <img src="@/assets/images/about-me-img_simple.png" alt="Рене Линарес" />
    </figure>
  </div>
</template>

<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from "vue";

gsap.registerPlugin(ScrollTrigger);

const gsapAnimateEl = (selector, scrub, translateY) => {
  gsap.to(selector, {
    scrollTrigger: {
      trigger: ".animated-img",
      start: "top bottom",
      scrub,
    },
    y: translateY,
    ease: "none",
  });
};

onMounted(() => {
  gsapAnimateEl(".word1", 2, 70);
  gsapAnimateEl(".word2", 3, 88);
  gsapAnimateEl(".word3", 5, 73);
  gsapAnimateEl(".word4", 3, 62);
  gsapAnimateEl(".word5", 6, 71);
  gsapAnimateEl(".word6", 4, 63);
  gsapAnimateEl(".word7", 3, 73);
  gsapAnimateEl(".word8", 5, 69);
  gsapAnimateEl(".word9", 2, 79);
  gsapAnimateEl(".word10", 6, 68);
  gsapAnimateEl(".word11", 3, 76);
  gsapAnimateEl(".word12", 4, 78);
  gsapAnimateEl(".word13", 2, 60);
  gsapAnimateEl(".word14", 5, 78);
  gsapAnimateEl(".word15", 6, 89);
});
</script>

<style scoped lang="scss">
.animated-img {
  position: relative;
  figure {
    display: flex;
    img {
      width: 100%;
      object-fit: contain;
      z-index: 0;
    }
  }
  span {
    position: absolute;
    font-family: "Open Sans", sans-serif;
    font-size: 20rem;
    color: $main-color;
    font-weight: 600;
    z-index: 1;
    @media only screen and (max-width: 650px) {
      font-size: 12rem;
    }
    &.word1 {
      top: 3rem;
      right: 62rem;
      transform: rotate(32deg) scale(1.3);
      @media only screen and (max-width: 650px) {
        top: 11rem;
        right: 54rem;
      }
    }
    &.word2 {
      right: 74rem;
      top: 78rem;
      transform: rotate(-8deg);
      @media only screen and (max-width: 650px) {
        right: 45rem;
        top: 56rem;
      }
    }
    &.word3 {
      right: 76rem;
      top: 136rem;
      transform: rotate(20deg) scale(1.8);
      z-index: 0;
      @media only screen and (max-width: 650px) {
        right: 53rem;
        top: 99rem;
      }
    }
    &.word4 {
      right: 18rem;
      top: 121rem;
      transform: rotate( -9deg);
      @media only screen and (max-width: 650px) {
        right: 14rem;
        top: 101rem;
      }
    }
    &.word5 {
      right: 38rem;
      top: 239rem;
      transform: rotate(-46deg) scale(1.7);
      @media only screen and (max-width: 650px) {
        right: 25rem;
        top: 177rem;
      }
    }
    &.word6 {
      right: 10rem;
      bottom: 186rem;
      transform: rotate(20deg);
      @media only screen and (max-width: 650px) {
        right: 14rem;
      bottom: 70rem;
      }
    }
    &.word7 {
      right: 42rem;
      bottom: 114rem;
      transform: rotate(116deg);
      @media only screen and (max-width: 650px) {
        right: 39rem;
        bottom: 28rem;
      }
    }
    &.word8 {
      left: 95rem;
      top: 0;
      transform: rotate(-27deg) scale(1.7);
      z-index: 0;
      @media only screen and (max-width: 650px) {
        left: 64rem;
        top: 1rem;
      }
    }
    &.word9 {
      left: 58rem;
      top: 51rem;
      transform: rotate(-37deg);
      @media only screen and (max-width: 650px) {
        left: 45rem;
        top: 30rem;
      }
    }
    &.word10 {
      left: 91rem;
      top: 85rem;
      transform: rotate(23deg);
      @media only screen and (max-width: 650px) {
        left: 56rem;
        top: 72rem;
      }
    }
    &.word11 {
      top: 128rem;
      left: 34rem;
      transform: rotate(-3deg) scale(1.4);
      z-index: 0;
      @media only screen and (max-width: 650px) {
        top: 101rem;
        left: 23rem;
      }
    }
    &.word12 {
      bottom: 234rem;
      left: 10rem;
      transform: rotate(-20deg) scale(1.9);
      @media only screen and (max-width: 650px) {
        bottom: 137rem;
        left: 7rem;
      }
    }
    &.word13 {
      bottom: 180rem;
      left: 49rem;
      transform: rotate(-18deg);
      @media only screen and (max-width: 650px) {
        bottom: 99rem;
        left: 37rem;
      }
    }
    &.word14 {
      bottom: 131rem;
      left: 10rem;
      transform: rotate(5deg);
      @media only screen and (max-width: 650px) {
        bottom: 63rem;
        left: 6rem;
      }
    }
    &.word15 {
      bottom: 107rem;
      left: 38rem;
      transform: rotate(-24deg);
      z-index: 0;
      @media only screen and (max-width: 650px) {
        bottom: 37rem;
        left: 26rem;
      }
    }
  }
}
</style>
