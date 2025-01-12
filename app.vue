<template>
  <div class="app container">
    <Header />
    <main>
      <Hero />
      <Projects />
      <Skills />
      <Certificates />
      <Contacts />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from "@/components/Layout/Header.vue";
import Hero from "@/components/Sections/Hero.vue";
import Skills from "@/components/Sections/Skills.vue";
import Certificates from "@/components/Sections/Certificates.vue";
import Projects from "@/components/Sections/Projects.vue";
import Contacts from "@/components/Sections/Contacts.vue";
import Footer from "@/components/Layout/Footer.vue";
import seoHeadTags from '@/helpers/seoHeadTags';

const { t } = useI18n();

useHead(
  seoHeadTags(
    () => t("seo_metadata.title"), 
    () => t("seo_metadata.description"),
    () => t("seo_metadata.author")
  )
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
