<script setup lang="ts">
import IntroductionComponent from "@/views/home/components/IntroductionComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import ProjectsComponent from "@/views/home/components/ProjectsComponent.vue";
import TechnologiesComponent from "@/views/home/components/TechnologiesComponent.vue";
import ContactComponent from "@/views/home/components/ContactComponent.vue";
import AboutMeComponent from "@/views/home/components/AboutMeComponent.vue";
</script>

<template>
  <main>
    <IntroductionComponent />
    <AboutMeComponent />
    <ProjectsComponent />
    <TechnologiesComponent />
    <ContactComponent />
    <FooterComponent />
  </main>
</template>