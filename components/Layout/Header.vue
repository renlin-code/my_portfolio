<template>
  <header class="header" :class="[{'header--up' : headerUp}, {'header--max-top': !scrolled}]">
    <div class="header__content main-content-wrapper">
      <BurgerButton
        class="desktop-hidden"
        :open="menuOpen"
        @click.native="menuOpen = !menuOpen"
      />
      <a href="#home" @click="menuOpen = false" class="header__logo">
        <RenlinCodeLogo />
      </a>

      <NavMenu
        :open="menuOpen"
        :dark="scrolled"
        @selectedNavItem="menuOpen = false"
      />
      <LangSelector 
        class="mobile-hidden" 
        :dark="scrolled"
      />
    </div>
  </header>
</template>

<script setup>
import BurgerButton from "../Buttons/BurgerButton.vue";
import NavMenu from "../Navigation/NavMenu.vue";
import contactIcon from "../Icons/contactIcon.vue";
import RenlinCodeLogo from "../Logos/renlinCodeLogo.vue";
import LangSelector from "../Buttons/LangSelector.vue";

const menuOpen = ref(false);
watch(menuOpen, (value) => {
  document.querySelector("body").style.overflowY = value ? "hidden" : "scroll";
});

const clientWidth = ref(null);
const headerUp = ref(false);
const scrolled = ref(false);

const headerScrollHandler = () => {
  let lastScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  scrolled.value = lastScrollPosition > 0;
  window.addEventListener("scroll", () => {
    const currentScrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    headerUp.value = currentScrollPosition > lastScrollPosition;
    lastScrollPosition = currentScrollPosition;
    scrolled.value = lastScrollPosition > 0;
  });
};

onMounted(() => {
  clientWidth.value = document.documentElement.clientWidth;
  headerScrollHandler();
});
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  position: fixed;
  background: $very-black-color;
  transition: all 400ms ease-out;
  z-index: 2;
  padding: 10rem 0;
  @media only screen and (max-width: 650px) {
    padding: 14rem 0;
  }
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 400ms ease-out;
    @media only screen and (max-width: 650px) {
      flex-direction: row-reverse;
    }
  }

  &__logo {
    width: 244rem;
    @media only screen and (max-width: 650px) {
      width: 128rem;
    }
  }
  &__phone {
    display: grid;
    grid-template-columns: 20rem 1fr;
    align-items: center;
    gap: 14rem;
    span {
      color: $white-color;
    }
  }
  &--up {
    transform: translateY(-100%);
  }
  &--max-top {
    padding-top: 40rem;
    background: transparent;
    @media only screen and (max-width: 650px) {
      padding-top: 14rem;
      background: $very-black-color;
    }
  }
}
</style>
