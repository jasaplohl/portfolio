<script lang="ts" setup>
import { technologies } from '@/data/technologies';
</script>

<template>
  <div class="gradient-alternate">
    <div class="section">
      <h2>Skills</h2>
      <div v-for="(tech, i) of technologies" :key="i">
        <h3>{{ tech.group }}</h3>
        <!-- TODO: make dropdown -->
        <div class="flex flex-wrap gap-2">
          <p v-for="item of tech.items" :key="item" class="pill mb-2">{{item}}</p>
        </div>
      </div>
    </div>
  </div>
</template>