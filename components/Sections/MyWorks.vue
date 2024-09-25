<template>
  <section id="works" class="works renlincode-section">
    <div class="works__content main-content-wrapper">
      <h2 class="works__title renlincode-title section-title">
        {{ $t('projects_for_companies_section.title') }}
      </h2>
      <ul class="works__wrapper">
        <li class="works__work" v-for="(work, index) in worksResult">
          <h6 class="works__work-info-title renlincode-subtitle desktop-hidden">
            {{ $tm('projects_for_companies_section.projects_list')[index].title }}
          </h6>
          <div class="works__work-left">
            <a :href="work.deploy_address" target="_blank" class="works__work-img-link">
              <figure class="onhover-light">
                <img :src="work.img_url" alt="" />
                <div class="front-layer"></div>
              </figure>
            </a>
          </div>
          <div class="works__work-info">
            <h6 class="works__work-info-title renlincode-subtitle mobile-hidden">
              {{ $tm('projects_for_companies_section.projects_list')[index].title }}
            </h6>
            <p class="works__work-info-list-title">{{ $t('projects_for_companies_section.details_text') }}</p>
            <ul class="works__work-info-list">
              <li v-for="detail in $tm('projects_for_companies_section.projects_list')[index].details">
                {{ detail }}
              </li>
            </ul>
            <div class="works__work-info-tech">
              <p class="works__work-info-tech-text">{{ $t('projects_for_companies_section.techs_text') }}</p>
              <ul>
                <li v-for="tech in work.stack">
                  <skillIcon withTooltip :type="tech" />
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
      <PrimaryButton class="works__load-more desktop-hidden" fullWidth v-if="worksMobShowing < works.length"
        @click="worksMobShowing = worksMobShowing + 2">
        {{ $t('projects_for_companies_section.load_more_text') }}
      </PrimaryButton>
    </div>
  </section>
</template>

<script setup>
import PrimaryButton from "../Buttons/PrimaryButton.vue";
import skillIcon from "../Icons/skillIcon.vue";
import works from "/public/data/works.json";

const clientWidth = ref(null);
const worksMobShowing = ref(2);

const worksResult = computed(() => {
  if (clientWidth.value > 650) {
    startFlickity();
    return works;
  } else {
    return works.slice(0, worksMobShowing.value);
  }
});

const flkty = ref(null);

const startFlickity = async () => {
  let options = {
    wrapAround: true,
    prevNextButtons: false,
    selectedAttraction: 0.05,
    friction: 1,
  };
  await nextTick();
  flkty.value = new Flickity(".works__wrapper", options);
};

onMounted(() => {
  clientWidth.value = document.documentElement.clientWidth;
});
</script>

<style scoped lang="scss">
.works {
  width: 100%;
  background: $very-black-color;
  overflow: hidden;

  &__wrapper {
    margin-bottom: 74rem;

    @media only screen and (max-width: 650px) {
      margin-bottom: 0;
    }
  }

  &__title {
    color: $white-color;
  }

  &__work {
    width: 1700rem;
    display: grid;
    grid-template-columns: 630rem 1fr;
    gap: 82rem;
    justify-content: space-between;

    @media only screen and (max-width: 650px) {
      width: 100%;
      display: flex;
      min-height: unset;
      flex-direction: column;
      gap: 0;
      margin-right: 0;
      margin-bottom: 60rem;
    }

    &:last-child {
      margin-bottom: 0;
    }

    &-img-link {
      @media only screen and (max-width: 650px) {
        display: block;
        margin-bottom: 20rem;
      }

      figure {
        display: flex;
        width: 100%;
        border-radius: 20rem;
        box-shadow: 4rem 8rem 50rem rgba(0, 0, 0, 0.81);
        @media only screen and (max-width: 650px) {
          border-radius: 16rem;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    &-info {
      width: 100%;
      padding-right: 40rem;

      @media only screen and (max-width: 650px) {
        padding-right: unset;
      }

      &-title {
        color: $white-color;
        font-family: "Open Sans", sans-serif !important;
        margin-bottom: 30rem;

        @media only screen and (max-width: 650px) {
          margin-bottom: 20rem;
        }
      }

      &-list {
        margin-bottom: 20rem;
        padding-left: 20rem;
        @media only screen and (max-width: 650px) {
          margin-bottom: 30rem;
        }

        &-title {
          color: $white-color;
          margin-bottom: 10rem;
          font-weight: 600;
        }

        li {
          color: $white-color;
          margin-bottom: 8rem;

          &:last-child {
            margin-bottom: 0;
          }

          &::marker {
            content: ">  ";
            color: $main-color;
            font-family: "Russo One", sans-serif;
            font-weight: 600;
          }
        }
      }

      &-tech {
        margin-bottom: 20rem;

        @media only screen and (max-width: 650px) {
          margin-bottom: 0;
        }

        &-text {
          color: $white-color;
          margin-bottom: 26rem;

          @media only screen and (max-width: 650px) {
            margin-bottom: 20rem;
            text-align: center;
          }
        }

        ul {
          display: flex;
          flex-wrap: wrap;
          gap: 20rem;
          list-style: none;

          @media only screen and (max-width: 650px) {
            gap: 14rem;
            justify-content: center;
          }

          li {
            width: 40rem;
            height: 40rem;

            @media only screen and (max-width: 650px) {
              width: 36rem;
              height: 36rem;
            }
          }
        }
      }
    }
  }

  &__load-more {
    margin-top: 30rem;
  }

  &:deep .flickity {
    &-viewport {
      overflow: visible;
      cursor: default !important;
    }

    &-page-dots {
      bottom: -76rem;

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
