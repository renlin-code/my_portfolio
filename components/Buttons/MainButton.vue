<template>
    <component class="main-button opacity" :is="as" :class="[`main-button--${type}`, {
        'main-button--full-width': fullWidth,
        'main-button--bold': bold,
    }]">
        <slot name="before" />
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
    },
    type: {
        type: String,
        default: "primary", // primary, transparent, gray
    },
    bold: {
        type: Boolean,
        default: false,
    },
});
</script>

<style scoped lang="scss">
.main-button {
    display: inline-flex;
    min-width: max-content;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    padding: 20rem 40rem;
    color: $very-black-color;
    font-size: 20rem;
    font-weight: 400;
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

    &--primary {
        background: $main-color;
    }

    &--transparent {
        background: transparent;
        border: 1rem solid $main-color;
        color: $white-color;
    }
    &--gray {
        background: $light-gray-color;
    }

    &--bold {
        font-weight: 600;
    }
}
</style>