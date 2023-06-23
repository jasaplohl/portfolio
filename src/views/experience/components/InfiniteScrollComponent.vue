<script lang="ts" setup>
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
</script>

<template>
  <div class="tag-list">
    <div class="loop-slider">
      <div class="inner">
        <i v-for="icon of icons" :key="icon" :class="icon" />
        <i v-for="icon of icons" :key="icon" :class="icon" />
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
  flex-shrink: 0;
  flex-direction: column;
  gap: 1rem 0;
  position: relative;
  padding: 1.5rem 0;
  overflow: hidden;
}

.loop-slider {
  .inner {
    display: flex;
    width: fit-content;
    animation-name: loop;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: 'normal';
    animation-duration: 15000ms;
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