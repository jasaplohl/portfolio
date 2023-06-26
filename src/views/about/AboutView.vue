<script lang="ts" setup>
import type {Ref} from "vue";
import {ref} from "vue";
import {useElementVisibility} from "@vueuse/core";

const aboutSection: Ref<HTMLDivElement | null> = ref(null);

const show = useElementVisibility(aboutSection);

// TODO: ChatGPT for my introduction
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
        <img v-if="show" alt="Avatar" src="/images/me.jpg" />
      </Transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'src/assets/styles/variables';

img {
  min-width: 15rem;
  min-height: 15rem;
  max-width: 15rem;
  max-height: 15rem;
  border-radius: 50%;
}
</style>