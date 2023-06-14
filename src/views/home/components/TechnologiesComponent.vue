<script lang="ts" setup>
import {getFrontendFrameworks, getLanguages, getBlockchain} from "@/data/technologies";
</script>

<template>
  <div class="page page--center page--gradient-secondary">
    <h2>I have experience with the following technologies</h2>
    <div class="custom-col-3 text-center">
      <div>
        <h3>Frontend frameworks</h3>
        <ul>
          <li v-for="tech of getFrontendFrameworks()" :key="tech">
            <p>{{tech}}</p>
          </li>
        </ul>
      </div>
      <div>
        <h3>Languages</h3>
        <ul>
          <li v-for="tech of getLanguages()" :key="tech">
            <p>{{tech}}</p>
          </li>
        </ul>
      </div>
      <div>
        <h3>Blockchain</h3>
        <ul>
          <li v-for="tech of getBlockchain()" :key="tech">
            <p>{{tech}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.custom-col-3 {
  display: flex;
  gap: 3rem;

  * > {
    width: 33.33%;
  }
}
</style>