<template>
  <footer class="footer">
    <div class="main-content-wrapper">
      <div class="footer__content">
        <div class="footer__logo">
          <RenlinCodeLogo />
        </div>
        <div class="footer__wrapper">
          <nav class="footer__nav">
            <ul class="footer__nav-list">
              <li v-for="(link, index) in $tm('nav_links')">
                <a class="underline" :href="LINKS[index]">{{ link }}</a>
              </li>
            </ul>
          </nav>
          <div class="footer__right">
            <span class="footer__link">
              {{ $t('footer.link_text') }}
              <a
                class="renlincode-link opacity"
                href="http://github.com/renlin-code/"
                target="_blank"
                rel="noopener noreferrer"
                >renlin-code</a
              >
            </span>
          </div>
        </div>
        <span class="footer__copyright">© {{ new Date().getFullYear() }} | Rene Linares</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import RenlinCodeLogo from "../Logos/renlinCodeLogo.vue";
import contactIcon from "../Icons/contactIcon.vue";

const LINKS = [
  "#about", "#certificates", "#works", "#projects", "#contacts"
];
</script>

<style scoped lang="scss">
.footer {
  width: 100%;
  padding: 40rem 0 30rem;
  background: $very-black-color;
  @media only screen and (max-width: 650px) {
    padding-bottom: 20rem;
  }
  &__logo {
    display: flex;
    justify-content: center;
    margin-bottom: 60rem;
    @media only screen and (max-width: 650px) {
      margin-bottom: 50rem;
    }
    svg {
      width: 214rem;
      @media only screen and (max-width: 650px) {
        width: 110rem;
      }
    }
  }
  &__wrapper {
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 650px) {
      flex-direction: column;
    }
  }
  &__nav {
    &-list {
      list-style: none;
      display: flex;
      gap: 30rem;
      @media only screen and (max-width: 650px) {
        display: grid;
        grid-template-columns: repeat(2, auto);
        column-gap: 10rem;
        row-gap: 16rem;
        margin-bottom: 30rem;
      }
      a {
        color: $white-color;
      }
    }
  }
  &__right {
    display: flex;
    flex-direction: column;
    gap: 30rem;
    @media only screen and (max-width: 650px) {
      align-items: center;
      gap: 16rem;
    }
  }
  &__link {
    color: $white-color;
  }
  &__copyright {
    display: block;
    text-align: center;
    color: $white-color;
    opacity: 0.4;
    font-size: 16rem;
    margin-top: 30rem;
    @media only screen and (max-width: 650px) {
      font-size: 14rem;
    }
  }
}
</style>
