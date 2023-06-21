<script lang="ts" setup>
import {Project, projects} from "@/data/projects";
import ProjectCardComponent from "@/views/projects/components/ProjectCardComponent.vue";
import type {ComputedRef} from "vue";
import {computed} from "vue";

const workProjects: ComputedRef<Project[]> = computed(() => {
  return projects.filter((p: Project) => p.type === 'work');
});

const personalProjects: ComputedRef<Project[]> = computed(() => {
  return projects.filter((p: Project) => p.type === 'personal');
});
</script>

<template>
  <div class="gradient">
    <div class="section">
      <h2>Projects</h2>
      <ul>
        <ProjectCardComponent
            v-for="project of workProjects"
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