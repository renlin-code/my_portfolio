<template>
  <div class="modal">
    <button class="modal__close opacity" @click="$emit('close')">
      <Close />
    </button>
    <slot />
  </div>
</template>

<script setup>
import Close from "@/components/Icons/close.vue";

onMounted(() => {
  document.querySelector("body").style.overflowY = "hidden";
});

onBeforeUnmount(() => {
  document.querySelector("body").style.overflowY = "scroll";
});

const emit = defineEmits(["close"]);
</script>

<style scoped lang="scss">
.modal {
  display: grid;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba($very-black-color, 0.95);
  z-index: 2;
  transition: transform 300ms ease-in-out;
  &__close {
    cursor: pointer;
    position: absolute;
    top: 20rem;
    right: 20rem;
    width: 24rem;
    height: 24rem;
    display: flex;
    @media only screen and (max-width: 650px) {
      width: 20rem;
      height: 20rem;
    }
  }
}
</style>
