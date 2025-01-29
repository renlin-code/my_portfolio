<template>
  <div class="modal-certificates">
    <div class="modal-certificates__counter">
      {{ selected + 1 }} / {{ certificates.length }}
    </div>
    <div class="modal-certificates__slider">
      <figure class="modal-certificates__slider-slide" v-for="certificate in certificates">
        <img :src="`/images/certificates/${certificate.file_name}.png`" alt="" />
      </figure>
    </div>
    <p class="modal-certificates__description">
      {{ $tm('certificates_section.certificates_names_list')[selected] }}
    </p>
  </div>
</template>

<script setup>
import certificates from "/public/data/certificates.json";

const props = defineProps({
  selectedInyected: {
    type: Number,
    default: null,
  },
});

const selected = ref(props.selectedInyected);

const clientWidth = ref(null);
const flkty = ref(null);

const startFlickity = (initialIndex) => {
  let options = {
    initialIndex,
    wrapAround: true,
    pageDots: false,
  };
  if (clientWidth.value > 650) {
    options.draggable = false;
  } else {
    options.draggable = true;
  }

  flkty.value = new Flickity(".modal-certificates__slider", options);
};

onMounted(() => {
  clientWidth.value = document.documentElement.clientWidth;
  startFlickity(selected.value);
  flkty.value.on("select", (index) => {
    selected.value = index;
  });
});
</script>

<style scoped lang="scss">
.modal-certificates {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__counter {
    color: $white-color;
    justify-self: center;
    margin-bottom: 30rem;
  }

  &__slider {
    width: 1500rem;
    height: 640rem;

    @media only screen and (max-width: 650px) {
      width: 100%;
      height: 223rem;
    }

    &-slide {
      width: 830rem;
      height: 100%;
      margin: 0 30%;
      box-shadow: 4rem 8rem 50rem rgba(0, 0, 0, 0.81);
      background: radial-gradient(circle,
          $secondary-color 0%,
          $black-color 100%);

      @media only screen and (max-width: 650px) {
        width: calc(100% - 30rem);
        margin: 0 10rem;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  &__description {
    color: $white-color;
    width: 1040rem;
    margin: 0 auto;
    text-align: center;
    font-size: 20rem;
    line-height: 26rem;
    font-weight: 600;
    margin-top: 30rem;

    @media only screen and (max-width: 650px) {
      width: calc(100% - 30rem);
      min-height: 100rem;
      font-size: 16rem;
      line-height: 22rem;
    }
  }

  &:deep .flickity {
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

      &:hover {
        background: $white-color;
        color: $very-black-color;
      }

      @media only screen and (max-width: 650px) {
        width: 36rem;
        height: 36rem;
        bottom: -190rem;
        top: unset;
      }

      &.previous {
        left: 20rem;

        @media only screen and (max-width: 650px) {
          left: 110rem;
        }
      }

      &.next {
        right: 20rem;

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
</style>
