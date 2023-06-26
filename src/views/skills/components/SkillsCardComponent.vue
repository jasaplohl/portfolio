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
  <!-- TODO: Flip card animation on hover -->
  <div class="skill-card">
    <h3 class="text-center">{{ skill.group }}</h3>
  </div>
</template>

<style lang="scss" scoped>
@import '/src/assets/styles/variables';

.skill-card {
  width: 50%;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $color-secondary;
}
</style>