<template>
  <section id="projects" class="projects renlincode-section">
    <div class="projects__content main-content-wrapper">
      <h2 class="projects__title renlincode-title section-title">
        {{ $t("personal_projects_section.title") }}
      </h2>
      <ul class="projects__wrapper">
        <li class="projects__project" :class="{ reverse: projects.indexOf(project) % 2 !== 0 }"
          v-for="(project, index) in projectsResult">
          <h6 class="projects__project-info-title renlincode-subtitle desktop-hidden">
            {{ $tm("personal_projects_section.projects_list")[index].title }}
          </h6>

          <div class="projects__project-left">
            <a target="_blank" :href="project.deploy_address" class="projects__project-img-link">
              <figure class="onhover-light">
                <img :src="`/images/${project.file_name}.png`" alt="" />
                <div class="front-layer"></div>
              </figure>
            </a>
          </div>
          <div class="projects__project-info">
            <h6 class="projects__project-info-title renlincode-subtitle mobile-hidden">
              {{ $tm("personal_projects_section.projects_list")[index].title }}
            </h6>
            <ul class="projects__project-info-list">
              <li v-for="detail in $tm(
                'personal_projects_section.projects_list'
              )[index].details">
                {{ detail }}
              </li>
            </ul>
            <div class="projects__project-info-tech">
              <p class="projects__project-info-tech-text">{{ $t('personal_projects_section.techs_text') }}</p>
              <ul>
                <li v-for="tech in project.stack">
                  <skillIcon withTooltip :type="tech" />
                </li>
              </ul>
            </div>
            <a v-if="project.repo_address" target="_blank" :href="project.repo_address"
              class="projects__project-info-link renlincode-link opacity">
              {{ $t('personal_projects_section.link_text') }}
              <Arrow2 class="projects__project-info-link-arrow" />
            </a>
          </div>
        </li>
      </ul>
      <PrimaryButton class="projects__load-more" v-if="projectsShowing < projects.length"
        @click="projectsShowing = projectsShowing + 2">
        {{ $t('projects_for_companies_section.load_more_text') }}
      </PrimaryButton>
    </div>
  </section>
</template>

<script setup>
import PrimaryButton from "../Buttons/PrimaryButton.vue";
import Arrow2 from "../Icons/arrow2.vue";
import skillIcon from "../Icons/skillIcon.vue";
import projects from "/public/data/projects.json";

const projectsShowing = ref(2);

const projectsResult = computed(() => {
  return projects.slice(0, projectsShowing.value);
});

</script>

<style scoped lang="scss">
.projects {
  width: 100%;
  background: $black-color;
  padding-bottom: 0;
  &__title {
    color: $white-color;
  }

  &__project {
    display: flex;
    justify-content: space-between;
    min-height: 200rem;
    margin-bottom: 130rem;

    @media only screen and (max-width: 650px) {
      min-height: unset;
      flex-direction: column !important;
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
        border-radius: 10rem;
        overflow: hidden;
        width: 580rem;
        box-shadow: 4rem 8rem 50rem rgba(0, 0, 0, 0.81);

        @media only screen and (max-width: 650px) {
          width: 100%;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    &-info {
      width: 773rem;

      @media only screen and (max-width: 650px) {
        width: 100%;
      }

      &-title {
        color: $white-color;
        font-family: "Open Sans", sans-serif;
        margin-bottom: 30rem;

        @media only screen and (max-width: 650px) {
          margin-bottom: 20rem;
        }
      }

      &-list {
        margin-bottom: 20rem;

        li {
          color: $white-color;
          margin-bottom: 8rem;

          &:last-child {
            margin-bottom: 0;
          }

          &::before {
            content: "> ";
            color: $main-color;
            font-family: "Russo One", sans-serif;
            font-weight: 600;
            margin-right: 10rem;

            @media only screen and (max-width: 650px) {
              margin-right: 8rem;
            }
          }
        }
      }

      &-tech {
        margin-bottom: 20rem;
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

      &-link {
        display: inline-flex;
        align-items: center;
        gap: 4rem;
      }
    }

    &.reverse {
      flex-direction: row-reverse;
    }
  }
  &__load-more {
    display: block;
    margin: 0 auto;
    margin-top: 30rem;
    @media only screen and (max-width: 650px) {
      width: 100%;
    }
  }
}
</style>
