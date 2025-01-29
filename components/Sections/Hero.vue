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
          <div class="hero__badge hero__badge--meta renlincode-small-text">
            <svg width="35rem" height="35rem" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1185_823)">
                <path
                  d="M3.78041 21.3881C3.78041 22.7219 4.07381 23.746 4.45717 24.3655C4.95988 25.177 5.70951 25.5207 6.47391 25.5207C7.45979 25.5207 8.36172 25.2765 10.0997 22.8774C11.4922 20.9545 13.1329 18.2552 14.2368 16.563L16.1064 13.6962C17.4051 11.7052 18.9082 9.49194 20.6318 7.99165C22.0385 6.76713 23.5564 6.08691 25.0838 6.08691C27.6484 6.08691 30.0911 7.57015 31.9607 10.352C34.0067 13.3986 35 17.236 35 21.1961C35 23.5503 34.5352 25.2802 33.744 26.6469C32.9796 27.9685 31.4897 29.289 28.9837 29.289V25.5207C31.1295 25.5207 31.665 23.5528 31.665 21.3007C31.665 18.0913 30.9153 14.5295 29.2637 11.9847C28.0915 10.1794 26.5725 9.07645 24.9014 9.07645C23.094 9.07645 21.6394 10.4369 20.0048 12.863C19.1358 14.1518 18.2436 15.7225 17.242 17.4947L16.1392 19.4445C13.924 23.3645 13.3629 24.2573 12.2553 25.7309C10.3139 28.3112 8.65635 29.289 6.47391 29.289C3.88514 29.289 2.24793 28.1701 1.23416 26.4841C0.406465 25.1101 0 23.3075 0 21.2533L3.78041 21.3881Z"
                  fill="#0081FB" />
                <path
                  d="M2.98047 10.6179C4.71379 7.95167 7.21492 6.08691 10.0837 6.08691C11.7452 6.08691 13.3968 6.57773 15.1215 7.98319C17.008 9.51978 19.0187 12.0501 21.5272 16.2205L22.4268 17.717C24.598 21.3274 25.8334 23.1847 26.5564 24.0607C27.4863 25.1855 28.1375 25.5207 28.9834 25.5207C31.1292 25.5207 31.6647 23.5528 31.6647 21.3007L34.9997 21.1961C34.9997 23.5503 34.5349 25.2802 33.7437 26.6469C32.9793 27.9685 31.4895 29.289 28.9834 29.289C27.4255 29.289 26.0453 28.9513 24.519 27.5141C23.3457 26.4112 21.974 24.4517 20.9187 22.6903L17.7796 17.4571C16.2047 14.8308 14.7599 12.8727 13.9238 11.9857C13.0245 11.0322 11.8681 9.88056 10.023 9.88056C8.52961 9.88056 7.26127 10.9266 6.19992 12.5264L2.98047 10.6179Z"
                  fill="url(#paint0_linear_1185_823)" />
                <path
                  d="M10.0231 9.88056C8.52975 9.88056 7.26141 10.9266 6.20006 12.5264C4.69943 14.7871 3.78041 18.1543 3.78041 21.3881C3.78041 22.7219 4.07381 23.746 4.45717 24.3655L1.23416 26.4841C0.406465 25.1101 0 23.3075 0 21.2533C0 17.5178 1.0273 13.6245 2.98074 10.6179C4.71406 7.95167 7.2152 6.08691 10.084 6.08691L10.0231 9.88056Z"
                  fill="url(#paint1_linear_1185_823)" />
              </g>
              <defs>
                <linearGradient id="paint0_linear_1185_823" x1="447.344" y1="1303.87" x2="2854.38" y2="1425.68"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="#0064E1" />
                  <stop offset="0.4" stop-color="#0064E1" />
                  <stop offset="0.83" stop-color="#0073EE" />
                  <stop offset="1" stop-color="#0082FB" />
                </linearGradient>
                <linearGradient id="paint1_linear_1185_823" x1="547.711" y1="1694.6" x2="547.711" y2="807.838"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="#0082FB" />
                  <stop offset="1" stop-color="#0064E0" />
                </linearGradient>
                <clipPath id="clip0_1185_823">
                  <rect width="35" height="24.3478" fill="white" transform="translate(0 6.08691)" />
                </clipPath>
              </defs>
            </svg>
            {{ $tm('hero_section.picture_badges')[0] }}
          </div>
          <div class="hero__badge hero__badge--available renlincode-small-text">
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
            {{ $tm('hero_section.picture_badges')[1] }}
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
              <contactIcon :name="contact.name" color="#D6D6D6" />
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
    min-height: unset;
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
    border-radius: 100rem;
    padding: 18rem 25rem;
    display: flex;
    align-items: center;
    gap: 5rem;
    color: $white-color;
    border: 1px solid;
    user-select: none;

    @media only screen and (max-width: 650px) {
      padding: 7rem 14rem;
      font-size: 12rem;
      line-height: 0;

      svg {
        width: 18rem;
        height: 18rem;
      }
    }

    &--meta {
      bottom: 110rem;
      left: -30rem;
      background: $black-color;
      border-color: #0082FB;
      @media only screen and (max-width: 650px) {
        left: 0;
        bottom: 40rem;
      }
    }

    &--available {
      background: $very-black-color;
      border-color: $main-color;
      bottom: 60rem;
      right: -36rem;

      @media only screen and (max-width: 650px) {
        left: auto;
        right: 0;
        bottom: 0;
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
