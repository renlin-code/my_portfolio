<template>
  <section id="works" class="works renlincode-section">
    <div class="works__content main-content-wrapper">
      <h2 class="works__title renlincode-title section-title">
        {{ $t("personal_projects_section.title") }}
      </h2>
      <div class="works__wrapper">
        <div
          class="works__work"
          :class="{ reverse: works.indexOf(work) % 2 !== 0 }"
          v-for="(work, index) in works"
        >
          <h6 class="works__work-info-title renlincode-subtitle desktop-hidden">
            {{ $tm("personal_projects_section.projects_list")[index].title }}
          </h6>

          <div class="works__work-left">
            <a target="_blank" :href="work.deploy_address" class="works__work-img-link">
              <figure class="onhover-light">
                <img :src="work.img_url" alt="" />
                <div class="front-layer"></div>
              </figure>
            </a>
          </div>
          <div class="works__work-info">
            <h6 class="works__work-info-title renlincode-subtitle mobile-hidden">
              {{ $tm("personal_projects_section.projects_list")[index].title }}
            </h6>
            <ul class="works__work-info-list">
              <li
                v-for="detail in $tm(
                  'personal_projects_section.projects_list'
                )[index].details"
              >
                {{ detail }}
              </li>
            </ul>
            <div class="works__work-info-tech">
              <p class="works__work-info-tech-text">{{ $t('personal_projects_section.techs_text') }}</p>
              <ul>
                <li v-for="tech in work.stack"><skillIcon :type="tech" /></li>
              </ul>
            </div>
            <a
              v-if="work.repo_address"
              target="_blank"
              :href="work.repo_address"
              class="works__work-info-link renlincode-link opacity"
            >
              {{ $t('personal_projects_section.link_text') }}
              <Arrow2 class="works__work-info-link-arrow" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Arrow2 from "../Icons/arrow2.vue";
import skillIcon from "../Icons/skillIcon.vue";
import works from "/public/data/works.json";

</script>

<style scoped lang="scss">
.works {
  width: 100%;
  background: $very-black-color;
  &__title {
    color: $white-color;
  }
  &__work {
    display: flex;
    justify-content: space-between;
    min-height: 200rem;
    margin-bottom: 80rem;
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
        border-radius: 10rem;
        overflow: hidden;
        width: 320rem;
        height: 200rem;
        box-shadow: 4rem 8rem 50rem rgba(0, 0, 0, 0.81);
        @media only screen and (max-width: 650px) {
          width: 100%;
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
      width: 573rem;
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
        padding-left: 20rem;
        margin-bottom: 20rem;
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
}
</style>
