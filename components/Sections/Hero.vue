<template>
  <section id="home" class="hero">
    <div class="hero__content main-content-wrapper">
      <div class="hero__top">
        <div class="hero__left">
          <h1 class="hero__title renlincode-title">
            {{ $t('hero_section.title') }}
          </h1>
          <h2 class="hero__subtitle renlincode-big-title">
            {{ $t('hero_section.subtitle') }}
          </h2>
          <p class="hero__description">
            {{ $t('hero_section.description') }}
          </p>
          <ul class="hero__contacts mobile-hidden">
            <li class="hero__contacts-item" v-for="contact in contacts">
              <a :href="contact.link" target="_blank">
                <contactIcon :name="contact.name" color="#D6D6D6" />
              </a>
            </li>
          </ul>
          <div class="hero__buttons mobile-hidden">
            <MainButton type="gray" as="a" bold href="#projects">
              <template #before>
                <svg width="26rem" height="20rem" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.78571 0.952393V13.2237L0.667643 15.3173C0.243153 15.7288 0.00311749 16.2873 0 16.8708C0.00341199 17.4471 0.23989 17.9988 0.658135 18.4064C1.07638 18.8139 1.64266 19.0443 2.23414 19.0476H23.7659C24.3573 19.0443 24.9236 18.8139 25.3419 18.4064C25.7601 17.9988 25.9966 17.4471 26 16.8708C25.9964 16.2869 25.7564 15.728 25.3324 15.3155L23.2143 13.2228V0.952393H2.78571ZM4.64286 2.76192H21.3571V12.7143H4.64286V2.76192ZM13 3.66668L11.6071 11.8095H13L14.3929 3.66668H13ZM9.36557 5.4762L7.76936 7.34725L7.42857 7.73811L7.76936 8.12896L9.36557 10L10.374 9.2192L9.10929 7.73811L10.3721 6.25701L9.36557 5.4762ZM16.6344 5.4762L15.626 6.25701L16.8907 7.73811L15.6279 9.2192L16.6354 10L18.2316 8.12896L18.5714 7.73811L18.2306 7.34725L16.6344 5.4762ZM4.12007 14.5238H21.879L24.0268 16.5876C24.1009 16.6643 24.1423 16.7655 24.1429 16.8708C24.1455 16.9197 24.1376 16.9686 24.1196 17.0144C24.1016 17.0601 24.0739 17.1017 24.0384 17.1363C24.0028 17.171 23.9602 17.1979 23.9132 17.2155C23.8663 17.233 23.8161 17.2407 23.7659 17.2381H2.23414C2.18393 17.2407 2.13372 17.233 2.08676 17.2155C2.03981 17.1979 1.99717 17.171 1.96162 17.1363C1.92606 17.1017 1.89838 17.0601 1.88038 17.0144C1.86238 16.9686 1.85447 16.9197 1.85714 16.8708C1.85714 16.7712 1.90079 16.6591 1.97321 16.5876L4.12007 14.5238Z"
                    fill="#1B1B1B" />
                </svg>
              </template>
              {{ $t('hero_section.sec_button') }}
            </MainButton>
            <MainButton primary bold as="a" :href="HIRE_ME_HREF" target="_blank">
              {{ $t('hero_section.prim_button') }}
            </MainButton>
          </div>
        </div>
        <div class="hero__right">
          <AnimatedImg />
          <div class="hero__badge renlincode-small-text">
            <svg width="23rem" height="23rem" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.3956 4.05859H21.1947C21.8174 4.05859 22.3222 4.56337 22.3222 5.18604V13.0781C22.3222 13.7008 21.8174 14.2056 21.1947 14.2056H18.9398L14.2403 7.62621C13.6795 6.84117 12.6815 6.49983 11.7574 6.77704L8.9554 7.61766C8.16085 7.85602 7.29958 7.63889 6.713 7.05231L6.38293 6.72222C5.87983 6.21914 5.96277 5.38156 6.55475 4.98691L12.6441 0.927294C13.3871 0.432016 14.3522 0.421745 15.1056 0.901115L19.7904 3.88232C19.9712 3.99744 20.1813 4.05859 20.3956 4.05859ZM4.31328 13.4105L2.49158 15.0045C1.96009 15.4695 1.98212 16.3031 2.53746 16.7395L8.33342 21.2934C8.87467 21.7187 9.66736 21.5639 10.0088 20.9662L10.8025 19.5775C11.2873 18.729 11.1705 17.665 10.5132 16.9419L7.46663 13.5907C6.64014 12.6815 5.23794 12.6015 4.31328 13.4105ZM6.58902 2.9312H2.02784C1.40517 2.9312 0.900391 3.43599 0.900391 4.05865V12.5323C0.900391 12.9928 1.04104 13.436 1.29521 13.807C1.32217 13.7816 1.34975 13.7564 1.37794 13.7317L3.19964 12.1377C4.8178 10.7219 7.27165 10.862 8.718 12.4531L11.7646 15.8043C12.9148 17.0695 13.1193 18.9318 12.2708 20.4165L11.5332 21.7075C12.1678 21.948 12.8908 21.8938 13.4929 21.5326L18.464 18.5499C19.0282 18.2113 19.1838 17.4636 18.8016 16.9281L12.8637 8.60916C12.7234 8.41293 12.4739 8.32759 12.2429 8.39689L9.44089 9.23749C8.05042 9.65464 6.54319 9.27469 5.51669 8.24815L5.18661 7.91807C3.92889 6.66035 4.13623 4.5664 5.61619 3.57976L6.58902 2.9312Z"
                fill="url(#paint0_linear_949_112)" />
              <defs>
                <linearGradient id="paint0_linear_949_112" x1="22.3222" y1="1.22297" x2="0.900392" y2="13.205"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="#F7DF1E" />
                  <stop offset="1" stop-color="#00E991" />
                </linearGradient>
              </defs>
            </svg>
            {{ $t('hero_section.picture_badge') }}
          </div>
        </div>
      </div>
      <div class="hero__bottom desktop-hidden">
        <div class="hero__bottom-buttons">
          <MainButton type="gray" fullWidth as="a" bold href="#projects">
            <template #before>
              <svg width="26rem" height="20rem" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.78571 0.952393V13.2237L0.667643 15.3173C0.243153 15.7288 0.00311749 16.2873 0 16.8708C0.00341199 17.4471 0.23989 17.9988 0.658135 18.4064C1.07638 18.8139 1.64266 19.0443 2.23414 19.0476H23.7659C24.3573 19.0443 24.9236 18.8139 25.3419 18.4064C25.7601 17.9988 25.9966 17.4471 26 16.8708C25.9964 16.2869 25.7564 15.728 25.3324 15.3155L23.2143 13.2228V0.952393H2.78571ZM4.64286 2.76192H21.3571V12.7143H4.64286V2.76192ZM13 3.66668L11.6071 11.8095H13L14.3929 3.66668H13ZM9.36557 5.4762L7.76936 7.34725L7.42857 7.73811L7.76936 8.12896L9.36557 10L10.374 9.2192L9.10929 7.73811L10.3721 6.25701L9.36557 5.4762ZM16.6344 5.4762L15.626 6.25701L16.8907 7.73811L15.6279 9.2192L16.6354 10L18.2316 8.12896L18.5714 7.73811L18.2306 7.34725L16.6344 5.4762ZM4.12007 14.5238H21.879L24.0268 16.5876C24.1009 16.6643 24.1423 16.7655 24.1429 16.8708C24.1455 16.9197 24.1376 16.9686 24.1196 17.0144C24.1016 17.0601 24.0739 17.1017 24.0384 17.1363C24.0028 17.171 23.9602 17.1979 23.9132 17.2155C23.8663 17.233 23.8161 17.2407 23.7659 17.2381H2.23414C2.18393 17.2407 2.13372 17.233 2.08676 17.2155C2.03981 17.1979 1.99717 17.171 1.96162 17.1363C1.92606 17.1017 1.89838 17.0601 1.88038 17.0144C1.86238 16.9686 1.85447 16.9197 1.85714 16.8708C1.85714 16.7712 1.90079 16.6591 1.97321 16.5876L4.12007 14.5238Z"
                  fill="#1B1B1B" />
              </svg>
            </template>
            {{ $t('hero_section.sec_button') }}
          </MainButton>
          <MainButton fullWidth primary bold as="a" :href="HIRE_ME_HREF" target="_blank">
            {{ $t('hero_section.prim_button') }}
          </MainButton>
        </div>
        <ul class="hero__contacts">
          <li class="hero__contacts-item" v-for="contact in contacts">
            <a :href="contact.link" target="_blank">
              <contactIcon :name="contact.name" :color="#D6D6D6" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import AnimatedImg from "../Others/AnimatedImg.vue";
import contactIcon from '../Icons/contactIcon.vue';
import MainButton from '../Buttons/MainButton.vue';
import contacts from "/public/data/contacts";

const HIRE_ME_HREF = "mailto:renelj1997@gmail.com?subject=Job%20Offer"
</script>

<style scoped lang="scss">
.hero {
  width: 100%;
  background: $black-color;
  background-image: url("/images/ellipse_bg.png");
  background-size: 2120rem 520rem;
  background-repeat: no-repeat;
  background-position: 50% 0;
  min-height: 100vh;
  padding-top: 120rem;
  padding-bottom: 100rem;
  position: relative;
  overflow: hidden;

  @media only screen and (max-width: 1300px) {
    height: 960rem;
  }

  @media only screen and (max-width: 650px) {
    padding-top: 56rem;
    padding-bottom: 0;
    height: auto;
  }

  &__content {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    padding-top: 70rem;

    @media only screen and (max-width: 650px) {
      gap: 34rem;
      padding-top: 30rem;
    }
  }

  &__top {
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 650px) {
      flex-direction: column;
      gap: 20rem;
    }
  }

  &__left {
    @media only screen and (max-width: 650px) {
      display: grid;
      grid-template-rows: repeat(3, auto);
    }
  }

  &__title {
    color: $yellow-color;
    padding: 23rem 0 60rem;

    @media only screen and (max-width: 650px) {
      padding: 0;
      padding-bottom: 20rem;
      font-size: 36rem;
    }
  }

  &__subtitle {
    color: $white-color;
    margin-bottom: 55rem;

    @media only screen and (max-width: 650px) {
      font-size: 40rem;
      line-height: 44rem;
      margin-bottom: 20rem;
      grid-row: 1 / 2;
    }
  }

  &__description {
    color: $white-color;
    width: 736rem;
    margin-bottom: 50rem;

    @media only screen and (max-width: 650px) {
      width: 100%;
      margin-bottom: 0;
      font-size: 14rem;
      line-height: 24rem;
    }
  }

  &__contacts {
    display: flex;
    align-items: center;
    margin-bottom: 40rem;
    gap: 16rem;

    @media only screen and (max-width: 650px) {
      gap: 12rem;
      margin-bottom: 60rem;
    }

    &-item {
      width: 45rem;

      @media only screen and (max-width: 650px) {
        width: 40rem;
      }
    }

    &::before,
    &::after {
      width: 30rem;
      height: 1rem;
      background: $white-color;

      @media only screen and (max-width: 650px) {
        content: "";
      }
    }

    &::before {
      margin-right: -2rem;
    }

    &::after {
      margin-left: -2rem;
    }
  }

  &__buttons {
    display: flex;
    align-items: center;
    gap: 24rem;

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

  &__right {
    position: relative;
    margin-right: 36rem;

    @media only screen and (max-width: 650px) {
      margin-right: 0;
    }
  }

  &__badge {
    position: absolute;
    z-index: 1;
    bottom: 74rem;
    left: -30rem;
    background: $very-black-color;
    border-radius: 100rem;
    padding: 18rem 25rem;
    display: flex;
    align-items: center;
    gap: 5rem;
    color: $white-color;
    border: 1px solid $main-color;
    user-select: none;

    @media only screen and (max-width: 650px) {
      padding: 10rem 20rem;
      font-size: 14rem;
      line-height: 0;
      left: auto;
      right: 0;
      bottom: 15rem;

      svg {
        width: 18rem;
        height: 18rem;
      }
    }
  }

  &__bottom-buttons {
    display: flex;
    align-items: center;
    gap: 8rem;
    margin-bottom: 40rem;
  }
}
</style>
