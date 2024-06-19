<template>
  <section id="about" class="about-me renlincode-section">
    <div class="about-me__content main-content-wrapper">
      <h2 class="about-me__title renlincode-title section-title">{{ $t('about_me_section.title') }}</h2>
      <div class="about-me__wrapper">
        <figure class="about-me__figure mobile-hidden">
          <img src="/images/about-me-img.png" alt="">
        </figure>
        <div class="about-me__right">
          <p class="about-me__right-text" v-html="$t('about_me_section.top_text')"></p>
          <p class="about-me__right-text" v-html="$t('about_me_section.skills_block.text')"></p>
          <ul class="about-me__right-list">
            <li v-for="skill in $tm('about_me_section.skills_block.skills')" v-html="skill"></li>
          </ul>
          <p class="about-me__right-text" v-html="$t('about_me_section.bottom_text')"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped lang="scss">
.about-me {
  width: 100%;
  background: $white-color;
  background-image: url("/images/bits-bg.png");
  background-size: 1000rem 820rem;
  background-position: -74rem 155rem;
  background-repeat: no-repeat;
  @media only screen and (max-width: 650px) {
    background-image: none;
  }

  &__content {
    position: relative;
    &::after {
      content: " }";
      color: $main-color;
      font-family: "Russo One", sans-serif;
      font-size: 54rem;
      line-height: 56rem;
      float: right;
      margin-top: -56rem;
      @media only screen and (max-width: 650px) {
        font-size: 36rem;
        line-height: 50rem;
        margin-top: -43rem;
      }
    }
  }

  &__title {
    color: $black-color;

    &::after {
      content: " {";
      color: $main-color;
    }
  }

  &__wrapper {
    display: grid;
    grid-template-columns: 515rem 1fr;
    column-gap: 189rem;

    @media only screen and (max-width: 650px) {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      gap: 0;
    }
  }

  &__figure {
    display: flex;
    height: fit-content;
    background: rgb(0, 233, 145);
    background: linear-gradient(180deg, rgba(0, 233, 145, 1) 0%, rgba(172, 237, 212, 1) 100%);
    border-radius: 0 80rem 0 80rem;
    overflow: hidden;

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  &__right {
    display: flex;
    flex-direction: column;
    gap: 30rem;
    @media only screen and (max-width: 650px) {
      gap: 20rem;
      padding-bottom: 46rem;
    }
    &-list {
      li {
        margin-bottom: 8rem;
        &::before {
          content: ">";
          color: $main-color;
          font-family: "Russo One", sans-serif;
          font-weight: 600;
          margin-right: 10rem;
        }
      }
    }
  }
}
</style>
