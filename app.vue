<template>
  <div class="container">
    <Header />
    <main class="container__main">
      <Hero />
      <AboutMe />
      <MyStack />
      <Certificates />
      <MyWorks />
      <MyProjects />
      <Contacts />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from "@/components/Layout/Header.vue";
import Hero from "@/components/Sections/Hero.vue";
import AboutMe from "@/components/Sections/AboutMe.vue";
import MyStack from "@/components/Sections/MyStack.vue";
import Certificates from "@/components/Sections/Certificates.vue";
import MyProjects from "@/components/Sections/MyProjects.vue";
import Contacts from "@/components/Sections/Contacts.vue";
import MyWorks from "@/components/Sections/MyWorks.vue";
import Footer from "@/components/Layout/Footer.vue";
import seoHeadTags from '@/helpers/seoHeadTags';

const { t } = useI18n();

useHead(
  seoHeadTags(() => t("seo_metadata.title"), () => t("seo_metadata.description") )
)
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
