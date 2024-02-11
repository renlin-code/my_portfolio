<template>
  <section id="home" class="hero">
    <div class="main-content-wrapper">
      <h1 class="hero__title renlincode-subtitle">
        {{ $t('hero_section.title') }}
        <p class="hero__title-big renlincode-big-title">{{ $t('hero_section.subtitle') }}</p>
      </h1>
      <img
        class="hero__img"
        src="@/assets/images/banner.png"
        alt="Рене Линарес"
      />
      <a href="#about" class="hero__arrows">
        <AnimatedArrows />
      </a>
    </div>
  </section>
</template>

<script setup>
import AnimatedArrows from '../Icons/animatedArrows.vue';
</script>
<style scoped lang="scss">
.hero {
  width: 100%;
  background: $black-color;
  height: calc(100vh - 70rem);
  position: relative;
  overflow: hidden;
  @media only screen and (max-width: 1050px) {
    height: 600rem;
  }
  @media only screen and (max-width: 650px) {
    height: 450rem;
  }
  &__title {
    color: $main-color;
    padding: 80rem 0 18rem;
    font-size: 20rem;
    letter-spacing: 1rem;
    @media only screen and (max-width: 650px) {
      padding-top: 20rem;
      font-size: 16rem;
    }
  }
  &__title-big {
    color: $white-color;
    width: 430rem;
    margin-top: 20rem;
    @media only screen and (max-width: 650px) {
      width: 100%;
    }
  }
  &__img {
    width: 88vh;
    object-fit: contain;
    position: absolute;
    bottom: -20rem;
    right: 100rem;
    @media only screen and (max-width: 1050px) {
      width: 600rem;
    }
    @media only screen and (max-width: 650px) {
      width: 88%;
      right: 50%;
      bottom: -10rem;
      transform: translateX(50%);
    }
  }
  &__arrows {
    position: absolute;
    bottom: 20rem;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
