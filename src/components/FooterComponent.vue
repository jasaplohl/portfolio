<template>
  <div class="footer mt-5">
    <div class="flex justify-center gap-4 mb-5">
      <a href="https://www.linkedin.com/in/jasa-plohl" target="_blank"><i class="bx bxl-linkedin-square"/></a>
      <a href="https://github.com/jasaplohl" target="_blank"><i class="bx bxl-github"/></a>
    </div>
    <p class="text-center">JAŠA PLOHL @2023</p>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/styles/variables";

.footer {
  color: $color-primary;
  padding: 1rem;
}

a {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $color-primary;
  color: $color-secondary;
  font-size: 2rem;
  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;

  &:hover {
    background-color: $color-secondary;
    color: $color-primary;
  }
}
</style>