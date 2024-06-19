<template>
    <component class="primary-button opacity" :is="as" :class="{'primary-button--full-width' : fullWidth}">
        <slot />
    </component>
</template>

<script setup>
const props = defineProps({
    as: {
        type: String,
        default: 'button',
    },
    fullWidth: {
        type: Boolean,
        default: false,
    }
});
</script>

<style scoped lang="scss">
.primary-button {
    display: inline-block;
    background: $main-color;
    padding: 20rem 60rem;
    color: $very-black-color;
    font-size: 20rem;
    font-weight: 600;
    text-align: center;
    border-radius: 100rem;
    font-family: "Open Sans", sans-serif;
    cursor: pointer;
    @media only screen and (max-width: 650px) {
        padding: 10rem;
        font-size: 16rem;
    }
    &--full-width {
        width: 100%;
    }
}
</style>