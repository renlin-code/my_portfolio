<template>
  <nav class="nav-menu" :class="[{ 'nav-menu--open': open }, { 'nav-menu--dark': dark }]">
    <ul class="nav-menu__list">
      <li v-for="(link, index) in $tm('nav_links')">
        <a class="underline" :href="LINKS[index]" @click="$emit('selectedNavItem')">{{ link }}</a>
      </li>
    </ul>
    <div class="nav-menu__lang desktop-hidden">
      <LangSelector />
    </div>
  </nav>
</template>

<script setup>
import LangSelector from "../Buttons/LangSelector.vue";

const LINKS = [
  "#about", "#my-stack", "#certificates", "#works", "#projects", "#contacts"
];

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  dark: {
    type: Boolean,
    default: true,
  },
});
const emit = defineEmits(["selectedNavItem"]);
</script>

<style scoped lang="scss">
.nav-menu {
  @media only screen and (max-width: 650px) {
    display: grid;
    place-content: center;
    gap: 20rem;
    position: fixed;
    left: 100%;
    top: 50rem;
    z-index: -1;
    width: 100%;
    height: calc(100vh - 60rem);
    background: $very-black-color;
    transition: transform 400ms ease-out;
  }

  &__list {
    list-style: none;
    display: flex;
    gap: 24rem;
    padding: 20rem 40rem;
    border-radius: 40rem;
    background: $black-color;
    transition: all 400ms ease-out;

    @media only screen and (max-width: 650px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 20rem;
      line-height: 22rem;
      font-weight: 600;
      background: $very-black-color;
    }

    a {
      color: $white-color;
    }
  }

  &__lang {
    display: flex;
    justify-content: center;
  }

  &--open {
    @media only screen and (max-width: 650px) {
      transform: translateX(-100%);
      overflow-y: scroll;
    }
  }

  &--dark {
    .nav-menu {
      &__list {
        background: $very-black-color;
      }
    }
  }
}
</style>
