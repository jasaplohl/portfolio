<script setup lang="ts">
import { getTechnologiesString } from '@/data/technologies';
import type {Ref} from "vue";
import {onMounted, ref} from "vue";
import IntroductionView from '@/views/introduction/IntroductionView.vue';
import AboutView from '@/views/about/AboutView.vue';
import ProjectsViewVue from '@/views/projects/ProjectsView.vue';
import ContactView from '@/views/contact/ContactView.vue';
import FooterComponent from "@/components/FooterComponent.vue";

const canvasElement: Ref<HTMLCanvasElement | null> = ref(null);

onMounted(() => {
  if (canvasElement.value) {
    initCanvas(canvasElement.value!);
  }
});

const initCanvas = (canvas: HTMLCanvasElement) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('Could not initialize canvas context!');
  }

  const letters = getTechnologiesString().split('');
  const fontSize: number = 10;
  const columns: number = canvas.width / fontSize;

  const drops: number[] = [];
  for (let i = 0; i < columns; i++) {
    drops[i] = 1;
  }
  // Loop the animation
  setInterval(() => draw(ctx, canvas, drops, letters, fontSize), 33);
}

// Setting up the draw function
function draw(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, drops: number[], letters: string[], fontSize: number) {
  ctx.fillStyle = 'rgba(0, 0, 0, .1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < drops.length; i++) {
    let text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = '#0f0';
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
      drops[i] = 0;
    }
  }
}
</script>

<template>
  <main class="h-screen relative overflow-x-hidden">
    <canvas ref="canvasElement"></canvas>
    <IntroductionView />
    <AboutView />
    <ProjectsViewVue />
    <ContactView />
    <FooterComponent />
  </main>
</template>

<style lang="scss" scoped>
@import 'src/assets/styles/variables';

canvas {
  z-index: -1;
  position: absolute;
  opacity: 0.8;
}

.back-button {
  background-color: $color-primary;
  color: $color-secondary;
}
</style>