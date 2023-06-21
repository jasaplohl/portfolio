<script lang="ts" setup>
const emits = defineEmits(['view-more']);
</script>

<template>
  <div class="section flex flex-col justify-center items-center">
      <h1>
        Hello, I'm <span class="font-bold">Jaša Plohl</span>.
        <br/>
        I'm a full-stack web developer.
      </h1>
      <button @click="emits('view-more')">View more <i class='bx bx-right-arrow-alt'/></button>
  </div>
</template>
