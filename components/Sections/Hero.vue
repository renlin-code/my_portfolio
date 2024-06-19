<template>
  <section id="home" class="hero">
    <div class="hero__content main-content-wrapper">
      <div class="hero__top">
        <div class="hero__left">
          <h1 class="hero__title renlincode-subtitle">
            {{ $t('hero_section.title') }}
            <p class="hero__title-big renlincode-big-title">{{ $t('hero_section.subtitle') }}</p>
          </h1>
          <div class="hero__contacts mobile-hidden">
            <PrimaryButton as="a" href="https://wa.me/+79373217299" target="_blank">
              {{ $t('hero_section.button') }}
            </PrimaryButton>
            <ul class="hero__contacts-others">
              <li v-for="contact in contacts">
                <a class="opacity" :href="contact.href" target="_blank" rel="noopener noreferrer">
                  <contactIcon :type="contact.type" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="hero__right">
          <AnimatedImg />
        </div>
      </div>
      <div class="hero__bottom">
        <PrimaryButton class="desktop-hidden" fullWidth as="a" href="https://wa.me/+79373217299" target="_blank">
          {{ $t('hero_section.button') }}
        </PrimaryButton>

        <div class="hero__arrows">
          <a href="#about">
            <AnimatedArrows />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AnimatedImg from "../Others/AnimatedImg.vue";
import AnimatedArrows from '../Icons/animatedArrows.vue';
import PrimaryButton from '../Buttons/PrimaryButton.vue';
import contactIcon from "../Icons/contactIcon.vue";

const CONTACTS = [
  {
    type: 'github',
    href: 'https://github.com/renlin-code'
  },
  {
    type: 'email',
    href: 'mailto:renelj1997@gmail.com'
  },
  {
    type: 'telegram',
    href: 'https://t.me/rene_linares'
  },
]

const contacts = computed(() => CONTACTS)
</script>

<style scoped lang="scss">
.hero {
  width: 100%;
  background: $black-color;
  background-image: url("/images/ellipse_bg.png");
  background-size: 2120rem 520rem;
  background-repeat: no-repeat;
  background-position: 50% 0;
  height: 100vh;
  padding-top: 120rem;
  position: relative;
  overflow: hidden;

  @media only screen and (max-width: 1050px) {
    height: 960rem;
  }

  @media only screen and (max-width: 650px) {
    padding-top: 50rem;
    height: auto;
  }

  &__content {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    @media only screen and (max-width: 650px) {
      gap: 34rem;
    }
  }

  &__top {
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 650px) {
      flex-direction: column;
      gap: 10rem;
    }
  }

  &__right {
    padding-right: 205rem;
    padding-top: 58rem;

    @media only screen and (max-width: 650px) {
      padding: 0;
    }
  }

  &__title {
    color: $main-color;
    padding: 80rem 0 18rem;
    font-family: "Russo One", sans-serif;
    font-size: 27rem;
    letter-spacing: 1rem;
    font-weight: 400;

    @media only screen and (max-width: 650px) {
      padding-top: 20rem;
      font-size: 16rem;
    }
  }

  &__title-big {
    color: $white-color;
    width: 430rem;
    margin-top: 25rem;

    @media only screen and (max-width: 650px) {
      width: 100%;
    }
  }

  &__contacts {
    display: flex;
    align-items: center;
    gap: 40rem;

    &-others {
      display: flex;
      gap: 20rem;
      align-items: center;

      li {
        width: 45rem;
        height: 45rem;
      }
    }
  }

  &__arrows {
    margin: 0 auto;
    width: fit-content;
    margin-bottom: 30rem;
    @media only screen and (max-width: 650px) {
      margin-top: 34rem;
      margin-bottom: 20rem;
    }
  }
}
</style>
