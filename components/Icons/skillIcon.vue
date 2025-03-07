<template>
  <div class="skill-icon">
    <Transition name="fade">
      <div v-if="showTooltip && withTooltip" class="skill-icon__tooltip">{{ iconData?.name }}</div>
    </Transition>

    <div class="skill-icon__icon" @mouseover="showTooltip = true" @mouseleave="showTooltip = false">
      <img :src="iconData?.icon" />
    </div>
  </div>
</template>

<script setup>
import HtmlIcon from "@/public/images/skills_icons/HtmlIcon.svg"
import CssIcon from "@/public/images/skills_icons/CssIcon.svg"
import JsIcon from "@/public/images/skills_icons/JsIcon.svg"
import NodeIcon from "@/public/images/skills_icons/NodeIcon.svg"
import SassIcon from "@/public/images/skills_icons/SassIcon.svg"
import ExpressIcon from "@/public/images/skills_icons/ExpressIcon.svg"
import VueIcon from "@/public/images/skills_icons/VueIcon.svg"
import NuxtIcon from "@/public/images/skills_icons/NuxtIcon.svg"
import TsIcon from "@/public/images/skills_icons/TsIcon.svg"
import SequelizeIcon from "@/public/images/skills_icons/SequelizeIcon.svg"
import PostgresIcon from "@/public/images/skills_icons/PostgresIcon.svg"
import WordpressIcon from "@/public/images/skills_icons/WordpressIcon.svg"
import PhpIcon from "@/public/images/skills_icons/PhpIcon.svg"
import TildaIcon from "@/public/images/skills_icons/TildaIcon.svg"
import OneCIcon from "@/public/images/skills_icons/1CIcon.svg"
import PrismaIcon from "@/public/images/skills_icons/PrismaIcon.svg"
import GoIcon from "@/public/images/skills_icons/GoIcon.svg"
import DockerIcon from "@/public/images/skills_icons/DockerIcon.svg"
import ReactIcon from "@/public/images/skills_icons/ReactIcon.svg"
import NextIcon from "@/public/images/skills_icons/NextIcon.svg"
import ViteIcon from "@/public/images/skills_icons/ViteIcon.svg"
import GitIcon from "@/public/images/skills_icons/GitIcon.svg"
import FigmaIcon from "@/public/images/skills_icons/FigmaIcon.svg"
import MongoIcon from "@/public/images/skills_icons/MongoIcon.svg"
import SQLiteIcon from "@/public/images/skills_icons/SQLiteIcon.svg"
import MySQLIcon from "@/public/images/skills_icons/MySQLIcon.svg"
import AWSIcon from "@/public/images/skills_icons/AWSIcon.svg"

const props = defineProps({
  type: {
    type: String,
    default: "",
  },
  withTooltip: {
    type: Boolean,
    default: false,
  }
});

const showTooltip = ref(false);

const ICONS = [
  {
    key: 'html',
    name: 'HTML',
    icon: HtmlIcon
  },
  {
    key: 'css',
    name: 'CSS',
    icon: CssIcon
  },
  {
    key: 'js',
    name: 'JavaScript',
    icon: JsIcon
  },
  {
    key: 'node',
    name: 'Node.js',
    icon: NodeIcon
  },
  {
    key: 'sass',
    name: 'SASS/SCSS',
    icon: SassIcon
  },
  {
    key: 'express',
    name: 'Express.js',
    icon: ExpressIcon
  },
  {
    key: 'vue',
    name: 'Vue.js',
    icon: VueIcon
  },
  {
    key: 'nuxt',
    name: 'Nuxt.js',
    icon: NuxtIcon
  },
  {
    key: 'ts',
    name: 'TypeScript',
    icon: TsIcon
  },
  {
    key: 'sequelize',
    name: 'Sequelize ORM',
    icon: SequelizeIcon
  },
  {
    key: 'postgres',
    name: 'Postgres SQL',
    icon: PostgresIcon
  },
  {
    key: 'wordpress',
    name: 'Wordpress',
    icon: WordpressIcon
  },
  {
    key: 'php',
    name: 'PHP',
    icon: PhpIcon
  },
  {
    key: 'tilda',
    name: 'Tilda',
    icon: TildaIcon
  },
  {
    key: '1c',
    name: '1C Bitrix',
    icon: OneCIcon
  },
  {
    key: 'prisma',
    name: 'Prisma ORM',
    icon: PrismaIcon
  },
  {
    key: 'go',
    name: 'Go',
    icon: GoIcon
  },
  {
    key: 'docker',
    name: 'Docker',
    icon: DockerIcon
  },
  {
    key: 'react',
    name: 'React',
    icon: ReactIcon
  },
  {
    key: 'next',
    name: 'Next.js',
    icon: NextIcon
  },
  {
    key: 'vite',
    name: 'Vite',
    icon: ViteIcon
  },
  {
    key: 'git',
    name: 'Git',
    icon: GitIcon
  },
  {
    key: 'figma',
    name: 'Figma',
    icon: FigmaIcon
  },
  {
    key: 'mongo',
    name: 'MongoDB',
    icon: MongoIcon
  },
  {
    key: 'sqlite',
    name: 'SQLite',
    icon: SQLiteIcon
  },
  {
    key: 'mysql',
    name: 'MySQL',
    icon: MySQLIcon
  },
  {
    key: 'aws',
    name: 'AWS',
    icon: AWSIcon
  },

]

const iconData = computed(() => ICONS.find(i => i.key === props.type))
</script>

<style scoped lang="scss">
.skill-icon {
  position: relative;
  width: 100%;
  height: 100%;

  &__tooltip {
    width: max-content;
    position: absolute;
    padding: 4rem;
    border-radius: 4rem;
    background: #050607;
    color: $white-color;
    left: 0;
    top: -50rem;
    @media only screen and (max-width: 650px) {
      top: -44rem;
    }

    &::before {
      content: "";
      position: absolute;
      background: #050607;
      width: 10rem;
      height: 10rem;
      transform: rotate(45deg);
      bottom: -3rem;
      left: 8rem;
    }
  }

  &__icon {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      object-fit: contain;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
