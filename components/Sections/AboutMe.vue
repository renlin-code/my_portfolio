<template>
  <section id="about" class="about-me renlincode-section">
    <div class="about-me__content main-content-wrapper">
      <h2 class="about-me__title renlincode-title section-title">{{ $t('about_me_section.title') }}</h2>
      <div class="about-me__wrapper">
        <ClientOnly>
          <AnimatedImg />
        </ClientOnly>
        <div class="about-me__right">
          <p class="about-me__right-text" v-html="$t('about_me_section.text')"></p>
          <p>{{ $t('about_me_section.skills_block.text') }}<br /><br /></p>
          <ul class="about-me__right-list">
            <li v-for="skill in $tm('about_me_section.skills_block.skills_list')">{{ skill }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AnimatedImg from "../Others/AnimatedImg.vue";
</script>

<style scoped lang="scss">
.about-me {
  width: 100%;
  background: $white-color;
  padding-bottom: 0;
  overflow: hidden;
  &__title {
    color: $black-color;
  }
  &__wrapper {
    display: grid;
    grid-template-columns: 450rem 1fr;
    column-gap: 100rem;
    align-items: flex-end;
    @media only screen and (max-width: 650px) {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      gap: 0;
    }
    img {
      width: 100%;
      object-fit: contain;
      align-self: flex-end;
    }
  }
  &__right {
    padding-bottom: 20rem;
    &-text {
      margin-bottom: 30rem;
    }
    &-list {
      padding-left: 20rem;
      li {
        margin-bottom: 8rem;
      }
    }
  }
}
</style>
