<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue';
import type { Skill } from '@/data/skills';
import { computed } from 'vue';

const props = defineProps({
  index: {
    type: Number,
    required: true,
  },
  maxIndex: {
    type: Number,
    required: true,
  },
  skill: {
    type: Object as PropType<Skill>,
    required: true,
  }
});

// If the last item is in its own row -> expand the item to 2 columns
const expand: ComputedRef<boolean> = computed(() => {
  return props.index === props.maxIndex && props.index % 2 === 0;
});
</script>

<template>
  <div class="skill-card" :class="expand ? 'col-span-2' : ''">
    <div class="skill-card--inner">
      <div class="skill-card--side skill-card--side__front">
        <h3 class="text-center select-none font-bold">{{ skill.group }}</h3>
      </div>
      <div class="skill-card--side skill-card--side__back">
        <div class="grid grid-cols-2 gap-2">
          <p v-for="(sk, i) of skill.items" :key="i" class="pill">{{ sk }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '/src/assets/styles/variables';

.skill-card {
  width: 100%;
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
    border-radius: 0.5rem;

    &__front {
      background-color: $color-secondary;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &__back {
      background-color: $color-secondary;
      transform: rotateY(180deg);
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1rem;
    }
  }

  &:hover {
    .skill-card--inner {
      transform: rotateY(180deg);
    }
  }
}
</style>