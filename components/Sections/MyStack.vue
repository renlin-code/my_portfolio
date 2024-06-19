<template>
  <section id="my-stack" class="my-stack renlincode-section">
    <div class="my-stack__content main-content-wrapper">
      <h2 class="my-stack__title renlincode-title section-title">{{ $t('stack_section.title') }}</h2>
      <ul class="my-stack__main-stack">
        <li v-for="skillsCol in mainStackMatrix">
          <div class="my-stack__main-stack-card" v-for="skill in skillsCol">
            <div class="my-stack__main-stack-card-figure">
              <skillIcon class="my-stack__main-stack-card-icon" :type="skill.key" />
            </div>
            <span class="my-stack__main-stack-card-name">{{ skill.name }}</span>
          </div>
        </li>
      </ul>
      <div class="my-stack__others">
        <span>{{ $t('stack_section.also_text') }}</span>
        <ul class="my-stack__others-list">
          <li v-for="skill in EXTRA_STACK">
            <skillIcon withTooltip class="my-stack__others-icon" :type="skill" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import skillIcon from "../Icons/skillIcon.vue";
const clientWidth = ref(null);

const MAIN_STACK = [
  {
    key: 'go',
    name: 'Go'
  },
  {
    key: 'js',
    name: 'JavaScript'
  },
  {
    key: 'ts',
    name: 'TypeScript'
  },
  {
    key: 'node',
    name: 'Node.js'
  },
  {
    key: 'express',
    name: 'Express.js'
  },
  {
    key: 'vue',
    name: 'Vue.js'
  },
  {
    key: 'nuxt',
    name: 'Nuxt.js'
  },
  {
    key: 'postgres',
    name: 'Postgres SQL'
  },
]

const mainStackMatrix = computed(() => {
  const result = [];
    const COLUMNS = clientWidth.value <= 650 ? 2 : 1;
    let counter = 0;

    while (counter < MAIN_STACK.length) {
      result.push(MAIN_STACK.slice(counter, counter + COLUMNS));
      counter += COLUMNS;
    }

    return result;
})
const EXTRA_STACK = ['docker', 'git', 'mongo', 'html', 'css', 'react', 'sass', 'vite', 'php', 'wordpress', 'figma']


const flkty = ref(null);

const startFlickity = async () => {
  let options = {
    autoPlay: true,
    prevNextButtons: false,
    selectedAttraction: 0.05,
    friction: 1,
  };
  await nextTick();
  flkty.value = new Flickity(".my-stack__main-stack", options);
};

onMounted(() => {
  clientWidth.value = document.documentElement.clientWidth;
  if (clientWidth.value <= 650) {
    startFlickity();
  }
});
</script>

<style scoped lang="scss">
.my-stack {
  width: 100%;
  background: $very-black-color;
  background-image: url("/images/ellipse_bg2.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &__title {
    color: $white-color;
  }

  &__main-stack {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20rem;
    row-gap: 30rem;
    @media only screen and (max-width: 650px) {
      display: block;
      margin: 0 -15rem;
    }
    li {
      display: flex;
      flex-direction: column;
      gap: 20rem;
      @media only screen and (max-width: 650px) {
        width: 290rem;
        margin: 0 50rem;
      }
    }
    &-card {
      &-figure {
        background: $black-color;
        border-radius: 20rem;
        border: 1rem solid $gray-color;
        display: grid;
        place-content: center;
        padding: 40rem;
        @media only screen and (max-width: 650px) {
          padding: 24rem;
        }
      }

      &-icon {
        width: 100rem;
        height: 100rem;
        @media only screen and (max-width: 650px) {
          width: 60rem;
          height: 60rem;
        }
      }

      &-name {
        color: $white-color;
        display: block;
        text-align: center;
        margin-top: 16rem;
        @media only screen and (max-width: 650px) {
          margin-top: 10rem;
        }
      }
    }
  }

  &__others {
    margin-top: 60rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20rem;
    @media only screen and (max-width: 650px) {
      flex-direction: column;
      margin-top: 86rem;
    }
    span {
      color: $white-color;
    }

    &-list {
      display: flex;
      gap: 14rem;
      @media only screen and (max-width: 650px) {
        flex-wrap: wrap;
        justify-content: center;
      }
    }

    &-icon {
      width: 54rem;
      height: 54rem;
      @media only screen and (max-width: 650px) {
        width: 36rem;
        height: 36rem;
      }
    }
  }
  &::v-deep .flickity {
    &-page-dots {
      bottom: -46rem;
      .dot {
        width: 8rem;
        height: 8rem;
        border-radius: 8rem;
        margin: 0 8rem;
        background: $white-color;
        transition: all 300ms ease-in-out;
        &.is-selected {
          background: $main-color;
          width: 30rem;
        }
      }
    }
  }
}
</style>
