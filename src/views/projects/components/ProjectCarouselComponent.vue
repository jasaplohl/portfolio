<script lang="ts" setup>
import type { ComputedRef, PropType, Ref } from 'vue';
import type { Project } from '@/data/projects';
import { computed, ref } from 'vue';
import ProjectCardComponent from '@/views/projects/components/ProjectCardComponent.vue';

const currentItemIndex: Ref<number> = ref(0);

const props = defineProps({
  projects: {
    type: Array as PropType<Project[]>,
    required: true
  }
});

const previousItem: ComputedRef<number> = computed(() => {
  if (currentItemIndex.value === 0) {
    return props.projects.length - 1;
  }
  return currentItemIndex.value - 1;
});

const nextItem: ComputedRef<number> = computed(() => {
  if (currentItemIndex.value === props.projects.length - 1) {
    return 0;
  }
  return currentItemIndex.value + 1;
});

const previous = () => {
  currentItemIndex.value = previousItem.value;
};

const next = () => {
  currentItemIndex.value = nextItem.value;
};
</script>

<template>
  <div class="carousel">
    <button class="carousel--btn carousel--btn__previous" @click="previous"><i class='bx bx-chevron-left' /></button>
    <button class="carousel--btn carousel--btn__next"  @click="next"><i class='bx bx-chevron-right' /></button>
    <div class="carousel--item carousel--item__previous">
      <ProjectCardComponent :project="projects[previousItem]" position="left" />
    </div>
    <div class="carousel--item carousel--item">
      <ProjectCardComponent :project="projects[currentItemIndex]" position="center" />
    </div>
    <div class="carousel--item carousel--item__next">
      <ProjectCardComponent :project="projects[nextItem]" position="right" />
    </div>
  </div>
  <div class="flex justify-center mt-2">
    <small>{{ currentItemIndex + 1 }} of {{ projects.length }}</small>
  </div>
</template>

<style lang="scss" scoped>
@import 'src/assets/styles/variables';

.carousel {
  position: relative;
  display: flex;
  gap: 1rem;
  justify-content: center;
  overflow-x: hidden;
  height: 20rem;
  width: 100%;

  &--btn {
    position: absolute;
    z-index: 10;
    font-size: 2.5rem;
    top: 50%;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transform: translateY(-50%);
    background-color: rgba($color-primary, 0.6);

    &__previous {
      left: 0;
    }

    &__next {
      right: 0;
    }
  }

  &--item {
    height: 100%;
    flex-shrink: 0;
    width: 80%;

    &__left {
      transform: translateX(-100%);
    }

    &__right {
      transform: translateX(100%);
    }
  }
}
</style>