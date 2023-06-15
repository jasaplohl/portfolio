<script lang="ts" setup>
import {personalProjects, projects} from "@/data/projects";
import ProjectCardComponent from "@/views/projects/components/ProjectCardComponent.vue";
import NavigationComponent from "@/components/NavigationComponent.vue";
</script>

<template>
  <div class="h-full flex justify-center items-center">
    <div class="section gradient">
      <NavigationComponent />
      <h2>This are some of the projects I have worked on</h2>
      <ul>
        <ProjectCardComponent
            v-for="project of projects"
            :key="project.title"
            :title="project.title"
            :technologies="project.technologies"
            :thumbnail="project.imgUrl"
            :url="project.url"
        />
      </ul>
      <h2>Personal projects</h2>
      <ul>
        <ProjectCardComponent
            v-for="project of personalProjects"
            :key="project.title"
            :title="project.title"
            :technologies="project.technologies"
            :thumbnail="project.imgUrl"
            :url="project.url"
        />
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>