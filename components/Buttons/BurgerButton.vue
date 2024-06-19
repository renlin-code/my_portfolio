<template>
  <div class="burger" :class="{ 'burger--open': open }">
    <span class="burger__strip"></span>
    <span class="burger__strip"></span>
    <span class="burger__strip"></span>
  </div>
</template>

<script setup>
const props = defineProps({
  open: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped lang="scss">
.burger {
  width: 26rem;
  height: 18rem;
  position: relative;
  cursor: pointer;
  transition: all 0.4s ease;
  &__strip {
    width: 26rem;
    height: 2rem;
    border-radius: 1rem;
    transition: all 0.4s ease;
    position: absolute;
    display: block;
    background: $white-color;
    &:nth-child(1) {
      top: 0rem;
    }
    &:nth-child(2) {
      top: calc(50% - 1rem);
    }
    &:nth-child(3) {
      top: calc(100% - 2rem);
    }
  }
  &--open {
    .burger__strip {
      &:nth-child(1) {
        transform: rotate(140deg);
        top: 10rem;
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: rotate(-140deg);
        top: 10rem;
      }
    }
  }
}
</style>
