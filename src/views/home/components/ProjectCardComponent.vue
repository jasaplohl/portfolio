<script lang="ts" setup>
import type {PropType} from "vue";

defineProps({
  title: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true,
  },
  technologies: {
    type: Object as PropType<String[]>,
    required: true,
  },
  url: {
    type: String,
    required: false,
    default: undefined,
  }
});
</script>

<template>
  <a class="project-card" :href="url" target="_blank">
    <div class="project-card--technologies">
      <div class="project-card--technologies__container">
        <p v-for="tech of technologies" :key="tech" class="pill">{{ tech }}</p>
      </div>
    </div>
    <div class="p-4">
      <img :alt="title" :src="thumbnail" class="project-card--thumbnail"/>
      <p class="project-card--title">{{ title }}</p>
    </div>
  </a>
</template>

<style lang="scss" scoped>
@import 'src/assets/styles/variables';

.project-card {
  position: relative;
  overflow: hidden;
  background-color: $color-secondary;
  color: $color-primary;
  border-radius: 1rem;

  &--thumbnail {
    max-height: 10rem;
  }

  &--title {
    font-weight: bold;
    margin-top: 0.5rem;
    text-align: center;
  }

  &--technologies {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(black, 0.7);
    padding: 0.5rem;
    transition: opacity 0.5s;

    &__container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.5rem;
    }
  }

  &:hover {
    .project-card--technologies {
      visibility: visible;
      opacity: 1;
    }
  }
}

.pill {
  background-color: $color-primary;
  color: $color-secondary;
  padding-inline: 1rem;
  padding-block: 0.5rem;
  border-radius: 1rem;
  user-select: none;
}
</style>