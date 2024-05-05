<script setup lang="ts">
import {getTechnologiesString} from '@/data/skills';
import type {Ref} from "vue";
import {onMounted, ref} from "vue";
import IntroductionView from '@/views/home/views/introduction/IntroductionView.vue';
import ContactView from '@/views/home/views/contact/ContactView.vue';

const canvasElement: Ref<HTMLCanvasElement | null> = ref(null);

const homeSection: Ref<HTMLElement | null> = ref(null);
const aboutSection: Ref<HTMLElement | null> = ref(null);
const skillsSection: Ref<HTMLElement | null> = ref(null);
const projectsSection: Ref<HTMLElement | null> = ref(null);
const contactSection: Ref<HTMLElement | null> = ref(null);

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
};

// Setting up the draw function
const draw = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, drops: number[], letters: string[], fontSize: number) => {
  ctx.fillStyle = 'rgba(0, 0, 0, .1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < drops.length; i++) {
    let text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = '#36ba01';
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
      drops[i] = 0;
    }
  }
};

const onViewMore = () => {
  onNavClick('about');
};

const onNavClick = (section: string) => {
  let targetSection: HTMLElement;
  switch (section) {
    case 'home':
      targetSection = homeSection.value!;
      break;
    case 'about':
      targetSection = aboutSection.value!;
      break;
    case 'skills':
      targetSection = skillsSection.value!;
      break;
    case 'projects':
      targetSection = projectsSection.value!;
      break;
    case 'contact':
      targetSection = contactSection.value!;
      break;
    default:
      throw new Error(`Invalid section name: ${section}`);
  }
  targetSection.scrollIntoView({
    behavior: 'smooth'
  });
};
</script>

<template>
  <main class="h-screen relative overflow-x-hidden">
<!--    <NavigationComponent @nav-click="onNavClick" />-->
    <canvas ref="canvasElement"></canvas>
    <div ref="homeSection">
      <IntroductionView @view-more="onViewMore"/>
    </div>
<!--    <div ref="aboutSection">-->
<!--      <AboutView />-->
<!--    </div>-->
<!--    <div ref="skillsSection">-->
<!--      <SkillsView />-->
<!--    </div>-->
<!--    <div ref="projectsSection">-->
<!--      <ProjectsViewVue />-->
<!--    </div>-->
    <div ref="contactSection">
      <ContactView/>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/variables';

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