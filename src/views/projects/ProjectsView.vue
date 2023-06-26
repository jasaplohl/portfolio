<script lang="ts" setup>
import {type Project, projects} from "@/data/projects";
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
            :project="project"
        />
      </ul>
      <h2>Personal projects</h2>
      <ul>
        <ProjectCardComponent
            v-for="project of personalProjects"
            :key="project.title"
            :project="project"
        />
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
ul {
  width: 100%;
  display: flex;
  gap: 1rem;
  overflow-x: auto;
}
</style>