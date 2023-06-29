<script lang="ts" setup>
import {type Project, projects} from "@/data/projects";
import type {ComputedRef} from "vue";
import {computed} from "vue";
import ProjectCarouselComponent from '@/views/projects/components/ProjectCarouselComponent.vue';

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
      <ProjectCarouselComponent :projects="workProjects" />
      <h2>Personal projects</h2>
      <ProjectCarouselComponent :projects="personalProjects" />
    </div>
  </div>
</template>