<template>
    <section id="projects" class="projects renlincode-section">
        <div class="projects__content main-content-wrapper">
            <h2 class="projects__title renlincode-title section-title">
                {{ $t("projects_section.title") }}
            </h2>
            <div class="projects__tabs">
                <Tabs :tabs="$tm('projects_section.projects_tabs')" @activeTabChange="setActiveTab" />
            </div>
            <div class="projects__projects">
                <div class="projects__project" v-for="(project, index) in currProjects">
                    <p class="projects__project-title renlincode-subtitle desktop-hidden">
                        {{ $tm("projects_section")[currProjectGroupName][index].title }}
                    </p>
                    <div class="projects__project-left">
                        <p class="projects__project-title renlincode-subtitle mobile-hidden">
                            {{ $tm("projects_section")[currProjectGroupName][index].title }}
                        </p>
                        <div class="projects__project-body">
                            <p class="projects__project-duration renlincode-small-text">
                                <span>{{ $tm("projects_section.keys")[0] }}:</span>
                                {{ $tm("projects_section")[currProjectGroupName][index].duration }}
                            </p>
                            <p class="projects__project-description renlincode-small-text">
                                <span>{{ $tm("projects_section.keys")[1] }}:</span>
                                {{ $tm("projects_section")[currProjectGroupName][index].description }}
                            </p>
                            <div class="projects__project-details">
                                <span class="renlincode-small-text">{{ $tm("projects_section.keys")[activeTab === 0 ? 2 : 3] }}:</span>
                                <ul>
                                    <li class="renlincode-small-text"
                                        v-for="detail in $tm('projects_section')[currProjectGroupName][index].details">
                                        {{ detail }}</li>
                                </ul>
                            </div>
                            <div v-if="project.repo_address">
                                <a class="projects__project-link renlincode-link--green opacity renlincode-small-text"
                                    :href="project.repo_address" target="_blank">
                                    Watch code
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                        class="projects__project-info-link-arrow" data-v-3af4f87c="" data-v-b0d1ad21="">
                                        <path
                                            d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"
                                            data-v-b0d1ad21=""></path>
                                    </svg>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div class="projects__project-right">
                        <a v-if="project.deploy_address" class="projects__project-img-link" :href="project.deploy_address" target="_blank">
                            <figure class="onhover-light">
                                <img :src="project.img_url" alt="" />
                                <div class="front-layer"></div>
                            </figure>
                        </a>
                        <div v-else class="projects__project-img-link">
                            <figure>
                                <img :src="project.img_url" alt="" />
                            </figure>
                        </div>
                    </div>
                    <ul class="projects__project-tech">
                        <li v-for="tech in project.stack">
                            <skillIcon withTooltip :type="tech" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import Tabs from '../Others/Tabs.vue';
import skillIcon from "../Icons/skillIcon.vue";
import projects from "/public/data/projects.json";

const activeTab = ref(0)
const setActiveTab = (index) => {
    activeTab.value = index
}

const currProjectGroupName = computed(() => activeTab.value === 0 ? "commercial" : "personal")
const currProjects = computed(() => projects[currProjectGroupName.value])
</script>

<style scoped lang="scss">
.projects {
    width: 100%;
    background: $very-black-color;
    padding-bottom: 0;
    overflow: hidden;
    @media only screen and (max-width: 650px) {
        padding-bottom: 30rem;
    }
    &__title {
        color: $white-color;
    }

    &__tabs {
        display: flex;
        justify-content: center;
        margin-bottom: 60rem;

        @media only screen and (max-width: 650px) {
            margin-bottom: 30rem;
        }
    }

    &__projects {
        display: flex;
        flex-direction: column;
        gap: 60rem;
        margin-top: 40rem;

        @media only screen and (max-width: 650px) {
            gap: 30rem;
        }
    }

    &__project {
        width: 100%;
        padding: 50rem;
        border-radius: 40rem;
        border: 1rem solid $light-gray-color;
        display: grid;
        grid-template-columns: 750rem 1fr;
        background: $black-color;
        column-gap: 50rem;
        row-gap: 20rem;

        @media only screen and (max-width: 650px) {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(4, auto);
            padding: 30rem 12rem;
            border-radius: 28rem;
            column-gap: 0;
            row-gap: 16rem;
        }

        &-left {
            @media only screen and (max-width: 650px) {
                grid-row: 3/4;
            }
        }

        &-right {
            @media only screen and (max-width: 650px) {
                grid-row: 2/3;
            }
        }

        &-title {
            margin-bottom: 26rem;
            color: $white-color;

            @media only screen and (max-width: 650px) {
                margin: 0;
                grid-row: 1/2;
            }
        }

        &-body {
            display: flex;
            flex-direction: column;
            gap: 16rem;

            @media only screen and (max-width: 650px) {
                gap: 8rem;
            }
        }

        p {
            color: $white-color;
        }

        span {
            font-weight: 600;
            color: $yellow-color;
        }

        &-details {
            ul {
                margin-top: 10rem;
                padding-left: 20rem;
                display: flex;
                flex-direction: column;
                gap: 6rem;

                @media only screen and (max-width: 650px) {
                    margin-top: 6rem;
                }

                li {
                    color: $white-color;
                    position: relative;
                    &:not(:last-child):after {
                        content: ';';
                    }
                    &:last-child:after {
                        content: '.';
                    }
                    &::before {
                        position: absolute;
                        left: -20rem;
                        content: ">  ";
                        color: $main-color;
                        font-family: "Russo One", sans-serif;
                        font-weight: 600;
                    }
                }
            }

        }

        &-img-link {
            display: block;
            margin-bottom: 20rem;

            @media only screen and (max-width: 650px) {
                margin-bottom: 0;
            }

            figure {
                display: flex;
                border-radius: 28rem;
                overflow: hidden;
                box-shadow: 4rem 8rem 50rem rgba(0, 0, 0, 0.81);

                @media only screen and (max-width: 650px) {
                    width: 100%;
                    border-radius: 12rem;
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }

        &-link {
            align-items: center;
            display: inline-flex;
            gap: 4rem;

            svg {
                height: 18rem;
                width: 18rem;

                path {
                    fill: $main-color;
                }
            }
        }

        &-tech {
            margin-top: 20rem;
            grid-column: 1/3;
            display: flex;
            flex-wrap: wrap;
            gap: 14rem;
            list-style: none;
            justify-content: center;

            @media only screen and (max-width: 650px) {
                justify-content: center;
                margin-top: 16rem;
            }

            li {
                width: 50rem;
                height: 50rem;

                @media only screen and (max-width: 650px) {
                    width: 36rem;
                    height: 36rem;
                }
            }
        }

    }

    &:deep .flickity {
        &-viewport {
            overflow: visible;
            cursor: default !important;
        }

        &-page-dots {
            bottom: 110rem;

            @media only screen and (max-width: 650px) {
                bottom: 50rem;
            }

            .dot {
                width: 8rem;
                height: 8rem;
                border-radius: 8rem;
                margin: 0 8rem;
                background: $white-color;
                transition: all 300ms ease-in-out;

                &.is-selected {
                    background: $main-color;
                    width: 30rem;
                }
            }
        }
    }

}
</style>
