<script lang="ts" setup>
import { skills } from '@/data/skills';
import SkillsCardComponent from '@/views/skills/components/SkillsCardComponent.vue';
</script>

<template>
  <div class="gradient-alternate">
    <div class="section">
      <h2>Skills</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        <SkillsCardComponent v-for="(skill, i) of skills" :key="i" :index="i" :max-index="skills.length - 1" :skill="skill" />
      </div>
    </div>
  </div>
</template>