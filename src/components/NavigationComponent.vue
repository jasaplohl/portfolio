<script lang="ts" setup>
const emits = defineEmits<{
  (e: 'nav-click', value: string): void
}>();

const onNavBtnClick = (event: Event) => {
  const value: string = (event.target as HTMLButtonElement).value;
  emits('nav-click', value);
}
</script>

<template>
  <div class="nav-row">
    <button class="nav-btn" value="home" @click="onNavBtnClick">Home</button>
    <button class="nav-btn" value="about" @click="onNavBtnClick">About me</button>
    <button class="nav-btn" value="experience" @click="onNavBtnClick">Skills</button>
    <button class="nav-btn" value="projects" @click="onNavBtnClick">Projects</button>
    <button class="nav-btn" value="contact" @click="onNavBtnClick">Contact</button>
  </div>
</template>

<style lang="scss" scoped>
@import 'src/assets/styles/variables';

.nav-row {
  position: fixed;
  width: 100%;
  z-index: 2;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid $color-primary;
  padding: 0.5rem;
  background-color: $color-secondary;
}

.nav-btn {
  background-color: $color-secondary;
  color: $color-primary;
  padding-inline: 1rem;
  padding-block: 0.5rem;
}
</style>