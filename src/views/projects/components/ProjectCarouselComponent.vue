<script lang="ts" setup>
import type { ComputedRef, PropType, Ref } from 'vue';
import type { Project } from '@/data/projects';
import { computed, ref } from 'vue';
import ProjectCardComponent from '@/views/projects/components/ProjectCardComponent.vue';

const currentProject: Ref<number> = ref(0);

defineProps({
  projects: {
    type: Array as PropType<Project[]>,
    required: true
  }
});

const onNavBtnClick = (index: number) => {
  currentProject.value = index;
};

const carouselInnerStyle: ComputedRef = computed(() => {
  return {
    'transform': `translateX(${-currentProject.value*100}%)`
  };
});
</script>

<template>
  <div class="carousel">
    <div class="carousel--inner" :style="carouselInnerStyle">
      <ProjectCardComponent v-for="(project, i) of projects" :key="i" :project="project" />
    </div>
    <div class="flex justify-center gap-3 mt-3">
      <div
          v-for="(_, i) of projects"
          @click="() => onNavBtnClick(i)"
          :key="i"
          class="nav-btn"
          :class="i === currentProject ? 'nav-btn--active' : ''"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'src/assets/styles/variables';

.carousel {
  overflow: hidden;
  width: 100%;

  &--inner {
    display: flex;
    transition: 0.5s ease;
  }
}

.nav-btn {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  border: 1px solid $color-primary;
  flex: 0 0 auto;
  transition: 0.5s;

  &--active {
    background-color: $color-primary;
  }

  &:hover {
    cursor: pointer;
  }
}
</style>