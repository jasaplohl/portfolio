<script lang="ts" setup>
import type { PropType } from 'vue';
import type { Skill } from '@/data/skills';

defineProps({
  skill: {
    type: Object as PropType<Skill>,
    required: true,
  }
});
</script>

<template>
  <div class="skill-card">
    <div class="skill-card--inner">
      <div class="skill-card--side skill-card--side__front">
        <h3 class="text-center">{{ skill.group }}</h3>
      </div>
      <div class="skill-card--side skill-card--side__back">
        <p v-for="(sk, i) of skill.items" :key="i">{{ sk }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '/src/assets/styles/variables';

.skill-card {
  width: 50%;
  height: 20rem;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */

  &--inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  &--side {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;

    &__front {
      background-color: #bbb;
      color: black;
    }

    &__back {
      background-color: dodgerblue;
      color: white;
      transform: rotateY(180deg);
    }
  }

  &:hover {
    .skill-card--inner {
      transform: rotateY(180deg);
    }
  }
}
</style>