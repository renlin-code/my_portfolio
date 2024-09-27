<template>
  <div class="animated-img">
    <figure class="animated-img__figure">
      <img src="/images/animated-img.png" alt="">
    </figure>
    <div class="animated-img__circle1"></div>
    <div class="animated-img__circle2"></div>
    <div class="animated-img__circle3"></div>
  </div>
</template>

<style scoped lang="scss">
.animated-img {
  position: relative;
  @media only screen and (max-width: 650px) {
    width: fit-content;
    margin: 0 auto;
  }

  &__figure {
    display: flex;
    justify-content: center;
    width: 635rem;
    height: 635rem;
    border-radius: 50%;
    overflow: hidden;
    background-image: url("/images/animated-img-circles.svg");
    background-position: center;
    background-size: calc(100% - 4rem);
    background-repeat: no-repeat;

    @media only screen and (max-width: 650px) {
      width: 260rem;
      height: 260rem;
    }

    img {
      width: 531rem;
      object-fit: contain;
      padding-top: 43rem;
      z-index: 1;

      @media only screen and (max-width: 650px) {
        width: 100%;
        padding-top: 35rem;
      }
    }
  }

  &__circle1,
  &__circle2,
  &__circle3 {
    position: absolute;
    top: 0;
    left: 0;
    width: 635rem;
    height: 635rem;
    background-position: center;
    background-size: calc(100% - 4rem);
    background-repeat: no-repeat;
    z-index: 0;

    @media only screen and (max-width: 650px) {
      width: 260rem;
      height: 260rem;
    }
  }

  &__circle1 {
    background-image: url("/images/animated-img-circle1.svg");
    animation: circle1 7s ease-in-out infinite;

    @keyframes circle1 {

      0%,
      100% {
        transform: rotate(20deg);
      }

      50% {
        transform: rotate(-20deg);
      }
    }
  }

  &__circle2 {
    background-image: url("/images/animated-img-circle2.svg");
    animation: circle2 12s ease-in-out infinite;

    @keyframes circle2 {

      0%,
      100% {
        transform: rotate(-25deg);
      }

      50% {
        transform: rotate(25deg);
      }
    }
  }

  &__circle3 {
    width: 710rem;
    height: 710rem;
    top: calc(50% - 355rem);
    left: calc(50% - 355rem);
    background-image: url("/images/animated-img-circle3.svg");
    animation: circle3 8s ease-in-out infinite;

    @keyframes circle3 {

      0%,
      100% {
        transform: rotate(-10deg);
      }

      50% {
        transform: rotate(10deg);
      }
    }

    @media only screen and (max-width: 650px) {
      width: 290rem;
      height: 290rem;
      top: calc(50% - 145rem);
      left: calc(50% - 145rem);

    }
  }

}
</style>
