<template>
  <section id="certificates" class="certificates renlincode-section">
    <Transition name="fade">
      <Modal v-if="showModal" @close="showModal = false">
        <ModalCertificates :selectedInyected="selected" />
      </Modal>
    </Transition>

    <div class="certificates__content main-content-wrapper">
      <h2 class="certificates__title renlincode-title section-title">{{ $t('certificates_section.title') }}</h2>
      <div class="certificates__wrapper">
        <p class="certificates__text">
          {{ $t('certificates_section.text') }}
          <a
            target="_blank"
            class="renlincode-link opacity"
            href="https://platzi.com"
            rel="noopener noreferrer"
            >Platzi</a
          >.
        </p>
        <div class="certificates__slider">
          <div class="certificates__slider-wrapper">
            <figure
              class="certificates__slider-slide onhover-light"
              v-for="(certificate, index) in certificates"
              :key="certificate.id"
              @click="openCertificate(index)"
            >
              <div class="front-layer"></div>
              <img :src="`/images/certificates/${certificate.file_name}-mini.png`" alt="" />
            </figure>
          </div>
          <div class="certificates__slider-shadow shadow-left mobile-hidden"></div>
          <div class="certificates__slider-shadow shadow-right mobile-hidden"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Modal from "@/components/Layout/Modal.vue";
import ModalCertificates from "@/components/Modals/ModalCertificates.vue";
import certificates from "/public/data/certificates.json";

const clientWidth = ref(null);
const flkty = ref(null);

const startFlickity = () => {
  let options = {
    autoPlay: true,
    pageDots: false,
    selectedAttraction: 0.05,
    friction: 1,
  };
  if (clientWidth.value > 650) {
    options.draggable = false;
  } else {
    options.draggable = true;
  }

  flkty.value = new Flickity(".certificates__slider-wrapper", options);
};

const selected = ref(null);
const showModal = ref(false);

const openCertificate = (index) => {
  selected.value = index;
  showModal.value = true;
};

onMounted(() => {
  clientWidth.value = document.documentElement.clientWidth;
  startFlickity();
});
</script>

<style scoped lang="scss">
.certificates {
  width: 100%;
  background: $black-color;
  &__content {
    @media only screen and (max-width: 650px) {
      padding: 0 !important;
    }
  }
  &__title {
    color: $white-color;
    @media only screen and (max-width: 650px) {
      padding: 0 15rem;
    }
  }
  &__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 100rem;
    justify-content: space-between;
    align-items: flex-start;
    @media only screen and (max-width: 650px) {
      display: flex;
      flex-direction: column;
      gap: 10rem;
    }
  }
  &__text {
    color: $white-color;
    padding-top: 40rem;
    @media only screen and (max-width: 650px) {
      padding: 0 15rem;
    }
  }
  &__slider {
    position: relative;
    width: 100%;
    overflow: hidden;
    padding: 40rem 0;
    @media only screen and (max-width: 650px) {
      height: 320rem;
    }
    &-wrapper {
      width: 100%;
      height: 100%;
    }
    &-slide {
      display: flex;
      width: 432rem;
      margin: 0 200rem;
      border-radius: 10rem;
      overflow: hidden;
      box-shadow: 4rem 8rem 50rem rgba(0, 0, 0, 0.81);
      cursor: url("@/assets/cursors/loupe.cur"), auto;
      @media only screen and (max-width: 650px) {
        width: calc(100% - 30rem);
        margin: 0 50rem;
      }
      img {
        width: 100%;
        object-fit: cover;
      }
    }
    &-shadow {
      width: 140rem;
      height: 100%;
      position: absolute;
      top: 0;
      &.shadow-left {
        left: 0;
        background: rgb(255, 255, 255);
        background: -moz-linear-gradient(
          270deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(21, 31, 40, 1) 100%
        );
        background: -webkit-linear-gradient(
          270deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(21, 31, 40, 1) 100%
        );
        background: linear-gradient(
          270deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(21, 31, 40, 1) 100%
        );
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#151f28",GradientType=1);
      }
      &.shadow-right {
        right: 0;
        background: rgb(255, 255, 255);
        background: -moz-linear-gradient(
          90deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(21, 31, 40, 1) 100%
        );
        background: -webkit-linear-gradient(
          90deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(21, 31, 40, 1) 100%
        );
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(21, 31, 40, 1) 100%
        );
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#151f28",GradientType=1);
      }
    }

    &::v-deep .flickity {
      &-viewport {
        overflow: visible;
        cursor: default !important;
      }
      &-prev-next-button {
        z-index: 1;
        width: 46rem;
        height: 46rem;
        background: transparent;
        color: $main-color;
        transform: none;
        transition: all 300ms ease-in-out;
        @media only screen and (max-width: 650px) {
          width: 36rem;
          height: 36rem;
        }
        &:hover {
          background: $white-color;
          color: $very-black-color;
        }
        @media only screen and (max-width: 650px) {
          bottom: -36rem;
          top: unset;
        }
        &.previous {
          @media only screen and (max-width: 650px) {
            left: 110rem;
          }
        }
        &.next {
          @media only screen and (max-width: 650px) {
            right: 110rem;
          }
        }
      }
      &-button:focus {
        box-shadow: none;
      }
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
