<template>
  <div class="modal-certificates">
    <div class="modal-certificates__counter">
      {{ selected + 1 }} / {{ certificates.length }}
    </div>
    <div class="modal-certificates__slider">
      <figure
        class="modal-certificates__slider-slide"
        v-for="certificate in certificates"
      >
        <img :src="certificate.url" alt="" />
      </figure>
    </div>
    <p class="modal-certificates__description">
      {{ $tm('certificates_section.certificates_names_list')[selected] }}
    </p>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
const certificates = reactive([
  {
    id: "0",
    name: "Curso de Frontend",
    url: "https://imgur.com/lPnFzWv.png",
    url_mini: "https://imgur.com/nu9fObo.png",
  },
  {
    id: "1",
    name: "Curso Práctico de Frontend",
    url: "https://imgur.com/QwLoaH5.png",
    url_mini: "https://imgur.com/zH3WhTM.png",
  },
  {
    id: "2",
    name: "Curso de HTML y CSS",
    url: "https://imgur.com/wHz3Oa6.png",
    url_mini: "https://imgur.com/8IgAiHa.png",
  },
  {
    id: "3",
    name: "Curso Práctico de HTML y CSS",
    url: "https://imgur.com/LqLRFCy.png",
    url_mini: "https://imgur.com/BlZhO9V.png",
  },
  {
    id: "4",
    name: "Curso de Responsive Design",
    url: "https://imgur.com/W8ZWjm1.png",
    url_mini: "https://imgur.com/1JLPaqK.png",
  },
  {
    id: "5",
    name: "Curso de la Terminal",
    url: "https://imgur.com/hcVJ1jo.png",
    url_mini: "https://imgur.com/3uDr96l.png",
  },
  {
    id: "6",
    name: "Curso de Git y GitHub",
    url: "https://imgur.com/UiwBBwR.png",
    url_mini: "https://imgur.com/WrgAMhV.png",
  },
  {
    id: "7",
    name: "Curso Básico de JavaScript",
    url: "https://imgur.com/UHzlGAX.png",
    url_mini: "https://imgur.com/1rojaBV.png",
  },
  {
    id: "8",
    name: "Curso Básico Práctico de JavaScript",
    url: "https://imgur.com/NNFKnCT.png",
    url_mini: "https://imgur.com/ZArpOF6.png",
  },
  {
    id: "9",
    name: "Curso de Closures y Scope",
    url: "https://imgur.com/vespUZi.png",
    url_mini: "https://imgur.com/jzHr9tn.png",
  },
  {
    id: "10",
    name: "Curso de Ingeniería de Softwares",
    url: "https://imgur.com/LqXd7rt.png",
    url_mini: "https://imgur.com/2cr7elT.png",
  },
  {
    id: "11",
    name: "Curso Básico de JS Orientado a Objetos",
    url: "https://imgur.com/aOWvcBv.png",
    url_mini: "https://imgur.com/Pmc1N5B.png",
  },
  {
    id: "12",
    name: "Curso Intermedio de JS Orientado a Objetos",
    url: "https://imgur.com/QWtmWJ4.png",
    url_mini: "https://imgur.com/axTQSlK.png",
  },
  {
    id: "13",
    name: "Curso de Manipulación de Arrays",
    url: "https://imgur.com/Zlr8QHf.png",
    url_mini: "https://imgur.com/H8Vqclw.png",
  },
  {
    id: "14",
    name: "Curso de Asincronismo en JavaScript",
    url: "https://imgur.com/pKlbh37.png",
    url_mini: "https://imgur.com/ASfPE57.png",
  },
  {
    id: "15",
    name: "Curso de Diseño Web con Flexbox y CSS Grid",
    url: "https://imgur.com/XaqS4sY.png",
    url_mini: "https://imgur.com/9cuPbZO.png",
  },
  {
    id: "16",
    name: "Curso de Transformaciones y Transiciones",
    url: "https://imgur.com/5O43Uv3.png",
    url_mini: "https://imgur.com/Tf6FGqD.png",
  },
  {
    id: "17",
    name: "Curso de Ecmascript",
    url: "https://imgur.com/J1h7fbJ.png",
    url_mini: "https://imgur.com/vEXaQT9.png",
  },
  {
    id: "18",
    name: "Curso de consumo de API REST con JavaScript",
    url: "https://imgur.com/Q7xjcoH.png",
    url_mini: "https://imgur.com/IaEjX5r.png",
  },
  {
    id: "19",
    name: "Curso de Fundamentos de TypeScript",
    url: "https://imgur.com/KMpeNwD.png",
    url_mini: "https://imgur.com/RThXdd2.png",
  },
  {
    id: "20",
    name: "Curso de Vue.js: Introducción y fundamentos",
    url: "https://imgur.com/QX6noWs.png",
    url_mini: "https://imgur.com/4z9NM9C.png",
  },
]);

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

<style lang="scss">
.modal-certificates {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__counter {
    color: $white-color;
    justify-self: center;
    font-size: 20rem;
    line-height: 26rem;
    font-weight: 600;
    margin-bottom: 30rem;
    @media only screen and (max-width: 650px) {
      font-size: 16rem;
      line-height: 22rem;
    }
  }
  &__slider {
    width: 1300rem;
    height: 436rem;
    @media only screen and (max-width: 650px) {
      width: 100%;
      height: 223rem;
    }
    &-slide {
      width: 560rem;
      height: 100%;
      margin: 0 30%;
      box-shadow: 4rem 8rem 50rem rgba(0, 0, 0, 0.81);
      background: radial-gradient(
        circle,
        $secondary-color 0%,
        $black-color 100%
      );
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
  .flickity {
    &-viewport {
      overflow: visible;
      cursor: default !important;
    }
    &-prev-next-button {
      z-index: 1;
      width: 26rem;
      height: 26rem;
      background: transparent;
      color: $main-color;
      transform: none;
      transition: all 300ms ease-in-out;
      &:hover {
        background: $white-color;
        color: $very-black-color;
      }
      @media only screen and (max-width: 650px) {
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
