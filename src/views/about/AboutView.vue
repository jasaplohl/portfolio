<script lang="ts" setup>
import type {Ref} from "vue";
import {ref, watch} from "vue";
import {useElementVisibility, useMouseInElement} from "@vueuse/core";

const aboutSection: Ref<HTMLDivElement | null> = ref(null);
const imageContainer: Ref<HTMLDivElement | null> = ref(null);
const showBackSide: Ref<boolean> = ref(false);

const show = useElementVisibility(aboutSection);
const { isOutside } = useMouseInElement(imageContainer);

// TODO: ChatGPT for my introduction

watch(isOutside, (value) => {
  if (value) {
    imageContainer.value?.classList.remove('rotate');
  } else {
    imageContainer.value?.classList.add('rotate');
  }
});
</script>

<template>
  <div ref="aboutSection" class="gradient">
    <div class="section flex flex-col md:flex-row md:justify-between items-center gap-10">
      <Transition name="slide-fade-left">
        <div v-if="show">
          <h1>About me</h1>
          <p>
            Welcome to my portfolio! My name is Jaša Plohl. I'm a full stack developer based in Kranj, Slovenia,
            with expertise in TypeScript, JavaScript, JavaScript frontend frameworks (VueJS, Angular), Node.js,
            Dart, Flutter and Golang. I specialize in building dynamic and responsive user interfaces using JavaScript
            frontend frameworks. <br /> <br/>
            On the backend, I leverage Node.js and Golang to develop robust server-side applications. Additionally,
            I also have experience with Dart and Flutter, allowing me to create cross-platform mobile applications.
            Explore my portfolio to see examples of my work and how I can bring your web and mobile development projects
            to life.
          </p>
        </div>
      </Transition>
      <Transition name="slide-fade-right">
        <div v-if="show" ref="imageContainer" class="image-container">
          <img v-if="!showBackSide" alt="Avatar" src="/images/me.jpg" class="image-container--front" />
          <div v-else class="image-container--back">
            <p>The dark side</p>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'src/assets/styles/variables';

.image-container {
  min-width: 15rem;
  min-height: 15rem;
  max-width: 15rem;
  max-height: 15rem;
  transition: 0.7s;
  
  &:hover {
    cursor: pointer;
  }

  &--front {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
  }

  &--back {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
  }
}

.rotate {
  transform: rotateY(180deg);
}
</style>