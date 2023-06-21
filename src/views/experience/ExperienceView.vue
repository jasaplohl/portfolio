<script lang="ts" setup>
import {getTechnologies, getOtherTechnologies} from "@/data/technologies";
</script>

<template>
  <div class="gradient-alternate">
    <div class="section">
      <h2>I have experience with the following technologies</h2>
      <div class="text-center flex gap-8">
        <div v-for="tech of getTechnologies()" :key="tech.group">
          <h3>{{ tech.group }}</h3>
          <ul>
            <li v-for="item of tech.items" :key="item">
              <p class="pill mb-2">{{item}}</p>
            </li>
          </ul>
        </div>
      </div>
      <h3>Other</h3>
      <div class="columns-3 gap-6">
        <p v-for="item of getOtherTechnologies().items" :key="item" class="pill mb-2">{{ item }}</p>
      </div>
    </div>
  </div>
</template>