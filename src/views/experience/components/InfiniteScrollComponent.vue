<script lang="ts" setup>
import type { ComputedRef } from 'vue';
import { computed } from 'vue';

const icons = [
    'bx bxl-typescript',
    'bx bxl-javascript',
    'bx bxl-nodejs',
    'bx bxl-vuejs',
    'bx bxl-postgresql',
    'bx bxl-java',
    'bx bxl-tailwind-css',
    'bx bxl-aws',
    'bx bxl-go-lang',
    'bx bxl-docker',
    'bx bxl-heroku',
    'bx bxl-github',
    'bx bxl-angular',
    'bx bxl-sass',
    'bx bxl-bootstrap',
    'bx bxl-django',
    'bx bxl-python',
    'bx bxl-firebase',
    'bx bxl-android',
    'bx bxl-flutter',
    'bx bxl-bitcoin',
];
// TODO: Randomize order
// TODO: Display tooltip on icon hover, to display the name of the technology

// We add the same array twice, so that the animation is smooth
const getIconList: ComputedRef<string[]> = computed(() => {
  return [...icons, ...icons];
});
</script>

<template>
  <div class="tag-list">
    <div class="inner">
      <div v-for="icon of getIconList" :key="icon">
        <i :class="icon" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'src/assets/styles/variables';

.tag-list {
  font-size: 3.5rem;
  width: 100%;
  display: flex;
  padding-block: 1.5rem;
  overflow: hidden;
}

.inner {
  display: flex;
  width: fit-content;
  animation-name: loop;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-duration: 16000ms;

  &:hover {
    animation-play-state: paused;
  }
}

i {
  margin-right: 1rem;
}

@keyframes loop {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>