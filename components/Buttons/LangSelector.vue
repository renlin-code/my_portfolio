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
        <li class="opacity" v-for="loc in availableLocales">
          <div @click="selectLang(loc)">{{ loc }}</div>
        </li>
      </ul>
    </div>
  </button>
</template>

<script setup>
const switchLocalePath = useSwitchLocalePath();

import Arrow from "../Icons/arrow.vue";
import { ref, computed } from "vue";

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
