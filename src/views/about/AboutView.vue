<script lang="ts" setup>
import NavigationComponent from "@/components/NavigationComponent.vue";
// TODO: ChatGPT for my introduction
</script>

<template>
  <div class="h-full flex justify-center items-center">
    <div class="section gradient">
    <NavigationComponent />
    <h1>About me</h1>
      <p>
        Welcome to my portfolio! My name is Jaša Plohl. I'm a full stack developer based in Kranj, Slovenia.
      </p>
      <img alt="Me" src="/images/me.jpg" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  max-width: 15rem;
  border-radius: 50%;
}
</style>