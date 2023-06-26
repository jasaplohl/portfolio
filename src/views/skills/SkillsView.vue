<script lang="ts" setup>
import { skills } from '@/data/skills';
import SkillsCardComponent from '@/views/skills/components/SkillsCardComponent.vue';
</script>

<template>
  <div class="gradient-alternate">
    <div class="section">
      <h2>Skills</h2>
      <div class="flex flex-wrap">
        <SkillsCardComponent v-for="(skill, i) of skills" :key="i" :skill="skill" />
      </div>
    </div>
  </div>
</template>