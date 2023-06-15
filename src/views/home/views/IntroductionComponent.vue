<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="h-full flex flex-col items-center justify-center">
    <h1>
      Hello, I'm <span>Jaša Plohl</span>.
      <br/>
      I'm a full-stack web developer.
    </h1>
    <RouterLink to="/about">View more <i class='bx bx-right-arrow-alt'/></RouterLink>
  </div>
</template>

