<template>
  <button
    class="lang-selector"
    :class="{ 'lang-selector--open': open }"
    @click="open = !open"
    @blur="open = false"
  >
    <div class="lang-selector__curr-option opacity">
      <span>{{ locale }}</span>
      <Arrow class="lang-selector__curr-option-arrow" />
    </div>
    <div class="lang-selector__options">
      <ul>
        <li class="opacity" v-for="lang in noneSelectedLangs" @click="selectLang(lang)">
          {{ lang }}
        </li>
      </ul>
    </div>
  </button>
</template>

<script setup>
  import { useI18n } from 'vue-i18n'
  import Tr from "@/i18n/translation"

import Arrow from "../Icons/arrow.vue";
import { ref, computed } from "vue";

const open = ref(false);

const { locale } = useI18n()
const supportedLocales = Tr.supportedLocales

const noneSelectedLangs = computed(() => {
  const langsCopy = [...supportedLocales];
  const currLocaleIndex = supportedLocales.indexOf(locale.value);
  langsCopy.splice(currLocaleIndex, 1);
  return langsCopy;
});

const selectLang = async (newLocale) => {
  // await Tr.switchLanguage(newLocale)

  window.location.replace(`${origin}?${newLocale}`);
};
</script>

<style scoped lang="scss">
.lang-selector {
  position: relative;
  padding: 0;
  font-size: 14rem;
  padding: 6rem;
  border-radius: 10rem 10rem 0 0;
  transition: all 300ms ease-in-out;
  &--open {
    background: #0d1519;
    .lang-selector {
      &__curr-option {
        &-arrow {
          transform: rotate(180deg);
        }
      }
      &__options {
        max-height: 100rem;
        padding-bottom: 6rem;
        background: #0d1519;
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
    }
    &-arrow {
      transition: all 300ms ease-in-out;
    }
  }
  &__options {
    position: absolute;
    left: 0;
    overflow: hidden;
    max-height: 0;
    width: 100%;
    padding-top: 6rem;
    border-radius: 0 0 10rem 10rem;
    transition: all 300ms ease-in-out;
    ul {
      display: flex;
      flex-direction: column;
      gap: 6rem;
      li {
        padding: 0 6rem;
        text-align: left;
        color: $white-color;
        text-transform: uppercase;
      }
    }
  }
}
</style>
