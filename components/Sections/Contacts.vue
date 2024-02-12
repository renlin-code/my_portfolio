<template>
  <section id="contacts" class="contacts renlincode-section">
    <div class="contacts__content main-content-wrapper">
      <h2 class="contacts__title renlincode-title section-title">{{ $t('contacts_section.title') }}</h2>
      <div class="contacts__wrapper">
        <ul class="contacts__list">
          <li>
            <a
              class="opacity"
              href="mailto:renelj1997@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <contactIcon type="email" />
            </a>
          </li>
          <li>
            <a
              class="opacity"
              href="https://wa.me/+79373217299"
              target="_blank"
              rel="noopener noreferrer"
            >
              <contactIcon type="whatsapp" />
            </a>
          </li>
          <li>
            <a
              class="opacity"
              href="https://t.me/rene_linares"
              target="_blank"
              rel="noopener noreferrer"
            >
              <contactIcon type="telegram" />
            </a>
          </li>
          <li>
            <a
              class="opacity"
              href="https://github.com/renlin-code"
              target="_blank"
              rel="noopener noreferrer"
            >
              <contactIcon type="github" />
            </a>
          </li>
        </ul>
        <a class="contacts__phone opacity" href="tel:+79373217299">
          <contactIcon type="phone" color="#00E991" class="contacts__phone-icon" />
          <span class="renlincode-subtitle">+7 (937) 321 72 99</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import contactIcon from "../Icons/contactIcon.vue";
</script>

<style scoped lang="scss">
.contacts {
  width: 100%;
  background: $black-color;
  &__title {
    color: $white-color;
  }
  &__wrapper {
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 650px) {
      flex-direction: column;
      gap: 20rem;
    }
  }
  &__list {
    display: flex;
    gap: 20rem;
    list-style: none;
    li {
      a {
        display: block;
        width: 26rem;
        height: 26rem;
      }
    }
    @media only screen and (max-width: 650px) {
      gap: 24rem;
    }
  }
  &__phone {
    display: grid;
    grid-template-columns: 20rem 1fr;
    align-items: center;
    gap: 14rem;
    span {
      color: $white-color;
      font-family: "Open Sans", sans-serif;
    }
  }
}
</style>
