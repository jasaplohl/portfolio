<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="nav-row">
    <RouterLink
        to="/"
        class="nav-link"
        active-class="nav-link--active"
    >
      Home
    </RouterLink>
    <RouterLink
        to="/"
        class="nav-link"
        active-class="nav-link--active"
    >
      About me
    </RouterLink>
    <RouterLink
        to="/"
        class="nav-link"
        active-class="nav-link--active"
    >
      Projects
    </RouterLink>
    <RouterLink
        to="/"
        class="nav-link"
        active-class="nav-link--active"
    >
      Experience
    </RouterLink>
    <RouterLink
        to="/"
        class="nav-link"
        active-class="nav-link--active"
    >
      Contact
    </RouterLink>
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

.nav-link {
  background-color: $color-secondary;
  color: $color-primary;
  padding-inline: 1rem;
  padding-block: 0.5rem;
  border-radius: 1rem 1rem 0 0;

  //&--active {
  //  background-color: $color-primary;
  //  color: $color-secondary;
  //}
}
</style>