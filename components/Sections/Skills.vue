<template>
  <section id="skills" class="skills renlincode-section">
    <div class="skills__content main-content-wrapper">
      <h2 class="skills__title renlincode-title section-title">{{ $t('stack_section.title') }}</h2>
      <ul class="skills__main-stack">
        <li v-for="skillsCol in mainStackMatrix">
          <div class="skills__main-stack-card" v-for="skill in skillsCol">
            <div class="skills__main-stack-card-figure">
              <skillIcon class="skills__main-stack-card-icon" :type="skill.key" />
            </div>
            <span class="skills__main-stack-card-name">{{ skill.name }}</span>
          </div>
        </li>
      </ul>
      <div class="skills__others">
        <span>{{ $t('stack_section.also_text') }}</span>
        <ul class="skills__others-list">
          <li v-for="skill in EXTRA_STACK">
            <skillIcon withTooltip class="skills__others-icon" :type="skill" />
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
    key: 'html',
    name: 'HTML'
  },
  {
    key: 'css',
    name: 'CSS'
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
    key: 'react',
    name: 'React'
  },
  {
    key: 'vue',
    name: 'Vue.js'
  },
  {
    key: 'node',
    name: 'Node.js'
  },
  {
    key: 'express',
    name: 'Express.js'
  },
]

const mainStackMatrix = computed(() => {
  const result = [];
  const COLUMNS = clientWidth.value <= 650 ? 4 : 1;
  let counter = 0;

  while (counter < MAIN_STACK.length) {
    result.push(MAIN_STACK.slice(counter, counter + COLUMNS));
    counter += COLUMNS;
  }

  return result;
})
  const EXTRA_STACK = ['next', 'nuxt', 'vite', 'sass', 'go', 'php', 'postgres', 'mongo', 'wordpress', 'docker', 'aws', 'git', 'figma']


const flkty = ref(null);

const startFlickity = async () => {
  let options = {
    prevNextButtons: false,
    selectedAttraction: 0.05,
    friction: 1,
  };
  await nextTick();
  flkty.value = new Flickity(".skills__main-stack", options);
};

onMounted(() => {
  clientWidth.value = document.documentElement.clientWidth;
  if (clientWidth.value <= 650) {
    startFlickity();
  }
});
</script>

<style scoped lang="scss">
.skills {
  width: 100%;
  background: $very-black-color;
  background: radial-gradient(ellipse 150% 200% at 50% 50%, $main-color -200%, $very-black-color 30%);
  overflow: hidden;
  @media only screen and (max-width: 650px) {
    padding-top: 30rem;
    background: radial-gradient(ellipse 300% 200% at 50% 50%, $main-color -200%, $very-black-color 30%);
  }
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
      margin: 0 -12rem;
    }

    li {
      display: flex;
      flex-direction: column;
      gap: 20rem;

      @media only screen and (max-width: 650px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12rem;
        width: 296rem;
        margin: 0 7rem;
      }
    }

    &-card {
      &-figure {
        background: $black-color;
        border-radius: 28rem;
        border: 1rem solid $gray-color;
        display: grid;
        place-content: center;
        padding: 40rem;

        @media only screen and (max-width: 650px) {
          padding: 24rem;
          border-radius: 12rem;
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
        gap: 18rem;
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

  &:deep .flickity {
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
