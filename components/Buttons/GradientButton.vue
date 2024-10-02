<template>
    <div class="gradient-button" :class="{
        'gradient-button--bold': bold,
    }">
        <component class="gradient-button__inner opacity" :is="as" v-bind="linkProps">
            <slot name="before" />
            <slot />
        </component>
    </div>
</template>

<script setup>
const props = defineProps({
    as: {
        type: String,
        default: 'button',
    },
    bold: {
        type: Boolean,
        default: false,
    },
    href: {
        type: String,
        default: '',
    },
    target: {
        type: String,
        default: '',
    },
});

const linkProps = computed(() =>
    props.as === 'a' ? {
        href: props.href,
        target: props.target,
    } : {}
)
</script>

<style scoped lang="scss">
.gradient-button {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    &:before {
        z-index: -1;
        width: 250%;
        height: 250%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        content: "";
        position: absolute;
        background-image: url("/images/gradient_btn.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    &__inner {
        position: relative;
        display: inline-flex;
        min-width: max-content;
        justify-content: center;
        align-items: center;
        gap: 5rem;
        padding: 17rem 15rem;
        color: $white-color;
        font-size: 20rem;
        font-weight: 400;
        text-align: center;
        font-family: "Open Sans", sans-serif;
        cursor: pointer;

        @media only screen and (max-width: 650px) {
            padding: 10rem;
            font-size: 16rem;
        }
    }

    &--bold {
        font-weight: 600;
    }
}
</style>