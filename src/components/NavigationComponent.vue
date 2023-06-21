<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="nav-row">
    <RouterLink
        to="/about"
        class="nav-link"
        active-class="nav-link--active"
    >
      About me
    </RouterLink>
    <RouterLink
        to="/projects"
        class="nav-link"
        active-class="nav-link--active"
    >
      Projects
    </RouterLink>
    <RouterLink
        to="/experience"
        class="nav-link"
        active-class="nav-link--active"
    >
      Experience
    </RouterLink>
    <RouterLink
        to="/contact"
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
  display: flex;
  gap: 1rem;
  border-bottom: 1px solid $color-primary;
  margin-bottom: 1rem;
}

.nav-link {
  background-color: $color-secondary;
  color: $color-primary;
  padding-inline: 1rem;
  padding-block: 0.5rem;
  border-radius: 1rem 1rem 0 0;

  &--active {
    background-color: $color-primary;
    color: $color-secondary;
  }
}
</style>