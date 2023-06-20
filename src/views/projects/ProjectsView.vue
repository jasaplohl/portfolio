<script lang="ts" setup>
import {personalProjects, projects} from "@/data/projects";
import ProjectCardComponent from "@/views/projects/components/ProjectCardComponent.vue";
</script>

<template>
  <div class="gradient-alternate">
    <div class="section">
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