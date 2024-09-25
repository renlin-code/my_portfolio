<template>
  <div class="lang-selector" :class="[{ 'lang-selector--open': open }, { 'lang-selector--dark': dark }]">
    <button class="lang-selector__button" @click="open = !open" @blur="open = false">
      <div class="lang-selector__curr-option opacity">
        <span>{{ locale }}</span>
        <Arrow class="lang-selector__curr-option-arrow" />
      </div>
      <div class="lang-selector__options">
        <ul>
          <li class="opacity" v-for="loc in availableLocales">
            <div @click="selectLang(loc)">{{ loc }}</div>
          </li>
        </ul>
      </div>
    </button>
  </div>
</template>

<script setup>
import Arrow from "../Icons/arrow.vue";

const props = defineProps({
  dark: {
    type: Boolean,
    default: true,
  },
});
const open = ref(false);

const { locale, locales } = useI18n()
const availableLocales = computed(() => {
  return (locales.value).filter(i => i !== locale.value)
})

const router = useRouter();

const selectLang = (newLocale) => {
  router.push(`/${newLocale}`)
};
</script>

<style scoped lang="scss">
.lang-selector {
  position: relative;
  width: 130rem;
  height: 75rem;

  @media only screen and (max-width: 650px) {
    width: 84rem;
    height: 40rem;
  }

  &__button {
    position: absolute;
    left: 0;
    top: 0;
    padding: 0;
    padding: 23rem 40rem;
    background: $black-color;
    border-radius: 40rem;
    transition: all 300ms ease-in-out;

    @media only screen and (max-width: 650px) {
      padding: 12rem 20rem;
      border-radius: 30rem;
    }
  }

  &--open {
    .lang-selector {
      &__button {
        background: #0d1519 !important;
      }

      &__curr-option {
        &-arrow {
          transform: rotate(180deg);
        }
      }

      &__options {
        max-height: 100rem;
        padding-top: 6rem;
      }
    }
  }

  &--dark {
    .lang-selector {
      &__button {
        background: $very-black-color;
      }
    }
  }

  &__curr-option {
    display: flex;
    align-items: center;
    gap: 6rem;

    span {
      color: $white-color;
      text-transform: uppercase;

      @media only screen and (max-width: 650px) {
        font-size: 16rem;
        line-height: 18rem;
      }
    }

    &-arrow {
      width: 16rem;
      height: 14rem;
      transition: all 300ms ease-in-out;
    }
  }

  &__options {
    overflow: hidden;
    max-height: 0;
    transition: all 300ms ease-in-out;

    ul {
      display: flex;
      flex-direction: column;
      gap: 6rem;

      @media only screen and (max-width: 650px) {
        font-size: 16rem;
        line-height: 18rem;
      }

      li {
        text-align: left;
        color: $white-color;
        text-transform: uppercase;
      }
    }
  }
}
</style>
