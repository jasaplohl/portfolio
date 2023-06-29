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
    <button class="nav-btn" value="home" @click="onNavBtnClick">
      <i class='bx bx-home' />
      <span>Home</span>
    </button>
    <button class="nav-btn" value="about" @click="onNavBtnClick">
      <i class='bx bxs-user-detail' />
      <span>About me</span>
    </button>
    <button class="nav-btn" value="skills" @click="onNavBtnClick">
      <i class='bx bx-badge-check' />
      <span>Skills</span>
    </button>
    <button class="nav-btn" value="projects" @click="onNavBtnClick">
      <i class='bx bx-file-blank' />
      <span>Projects</span>
    </button>
    <button class="nav-btn" value="contact" @click="onNavBtnClick">
      <i class='bx bx-envelope' />
      <span>Contact</span>
    </button>
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
  white-space: nowrap;

  * {
    pointer-events: none;
  }

  i {
    display: none;
  }
}

@media (max-width: $breakpoint-mobile) {
  .nav-row {
    justify-content: space-evenly;
  }

  .nav-btn {
    span {
      display: none;
    }

    i {
      display: block;
    }
  }
}
</style>