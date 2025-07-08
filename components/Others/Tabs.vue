<template>
    <ul class="tabs">
        <li class="tabs__item" v-for="(tab, index) in tabs" :class="{ 'tabs__item--active': activeTab === index }">
            <button @click="setActiveTab(index)">{{ tab }}</button>
        </li>
    </ul>
</template>

<script setup>
const props = defineProps({
    tabs: {
        type: Array,
        required: true,
    },
})
const emit = defineEmits(["activeTabChange"]);

const activeTab = ref(0)

const setActiveTab = (index) => {
    activeTab.value = index
    emit('activeTabChange', index)
}
</script>

<style scoped lang="scss">
.tabs {
    display: inline-flex;
    gap: 20rem;

    @media only screen and (max-width: 650px) {
        gap: 8rem;
    }

    &__item {
        display: flex;

        button {
            font-size: 30rem;
            padding: 30rem 60rem;
            border: 1rem solid $light-gray-color;
            border-radius: 20rem;
            color: $white-color;
            transition: all 300ms ease-in-out;

            @media only screen and (max-width: 650px) {
                padding: 12rem;
                font-size: 14rem;
                border-radius: 17rem;
            }
        }

        &--active {
            button {
                background: $main-color;
                color: $very-black-color;
                border-color: transparent;
            }
        }
    }
}
</style>