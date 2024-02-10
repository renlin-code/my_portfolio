<template>
  <section id="projects" class="projects renlincode-section">
    <div class="projects__content main-content-wrapper">
      <h2 class="projects__title renlincode-title section-title">
        {{ $t('projects_for_companies_section.title') }}
      </h2>
      <div class="projects__wrapper">
        <div class="projects__project" v-for="(project, index) in projectsResult">
          <h6 class="projects__project-info-title renlincode-subtitle desktop-hidden">
            {{ $tm('projects_for_companies_section.projects_list')[index].title }}
          </h6>
          <div class="projects__project-left">
            <a
              :href="project.deploy_address"
              target="_blank"
              class="projects__project-img-link"
            >
              <figure class="onhover-light">
                <img :src="project.img_url" alt="" />
                <div class="front-layer"></div>
              </figure>
            </a>
          </div>
          <div class="projects__project-info">
            <h6 class="projects__project-info-title renlincode-subtitle mobile-hidden">
              {{ $tm('projects_for_companies_section.projects_list')[index].title }}
            </h6>
            <p class="projects__project-info-list-title">{{ $t('projects_for_companies_section.details_text') }}</p>
            <ul class="projects__project-info-list">
              <li v-for="detail in $tm('projects_for_companies_section.projects_list')[index].details">
                {{ detail }}
              </li>
            </ul>
            <div class="projects__project-info-tech">
              <p class="projects__project-info-tech-text">{{ $t('projects_for_companies_section.techs_text') }}</p>
              <ul>
                <li v-for="tech in project.stack"><skillIcon :type="tech" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <button
        v-if="projectsMobShowing < projects.length"
        class="projects__load-more renlincode-link opacity desktop-hidden"
        @click="projectsMobShowing = projectsMobShowing + 2"
      >
        {{ $t('projects_for_companies_section.load_more_text') }}
      </button>
    </div>
  </section>
</template>

<script setup>
import skillIcon from "../Icons/skillIcon.vue";
import { ref, computed, nextTick, onMounted } from "vue";
import projects from "./projects.json";

const clientWidth = ref(null);
const projectsMobShowing = ref(2);

const projectsResult = computed(() => {
  if (clientWidth.value > 650) {
    startFlickity();
    return projects;
  } else {
    return projects.slice(0, projectsMobShowing.value);
  }
});

const flkty = ref(null);

const startFlickity = async () => {
  let options = {
    autoPlay: true,
    pauseAutoPlayOnHover: false,
    wrapAround: true,
    prevNextButtons: false,
    selectedAttraction: 0.05,
    friction: 1,
  };
  await nextTick();
  flkty.value = new Flickity(".projects__wrapper", options);
};

onMounted(() => {
  clientWidth.value = document.documentElement.clientWidth;
});
</script>

<style lang="scss">
.projects {
  width: 100%;
  background: $black-color;
  overflow: hidden;
  &__title {
    color: $white-color;
  }
  &__project {
    width: 1100rem;
    display: grid;
    grid-template-columns: 443rem 1fr;
    gap: 82rem;
    justify-content: space-between;
    min-height: 248rem;
    margin-right: 30rem;
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
        width: 100%;
        height: 248rem;
        border-radius: 10rem;
        box-shadow: 4rem 8rem 50rem rgba(0, 0, 0, 0.81);
        @media only screen and (max-width: 650px) {
          height: 170rem;
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
      padding-right: 90rem;
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
        padding-left: 20rem;
        margin-bottom: 20rem;
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
            color: $main-color;
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
          margin-bottom: 10rem;
        }
        ul {
          display: flex;
          flex-wrap: wrap;
          gap: 10rem;
          list-style: none;
        }
      }
    }
  }
  &__load-more {
    margin-top: 30rem;
    font-size: 16rem;
  }
  .flickity {
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
