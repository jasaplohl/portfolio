<script lang="ts" setup>
import type { PropType, Ref } from "vue";
import { ref } from 'vue';
import type { Project } from '@/data/projects';
import { dateToLocalString } from '@/services/date.service';

const dialog: Ref<HTMLDialogElement | null> = ref(null);

defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true
  }
});

const openDialog = () => {
  dialog.value?.showModal();
};

const closeDialog = () => {
  dialog.value?.close();
};
</script>

<template>
  <dialog class="dialog gradient-alternate" ref="dialog">
    <div class="flex justify-end">
      <button @click="closeDialog" class="close-btn"><i class="bx bx-x" /></button>
    </div>
    <h3 class="font-bold">{{ project.title }}</h3>
    <small>{{ dateToLocalString(project.startDate) }} - {{ dateToLocalString(project.endDate) }}</small>
    <div class="flex justify-center">
      <img :alt="project.title" :src="project.imgUrl"/>
    </div>
    <div class="flex justify-center flex-wrap gap-2 py-2">
      <p v-for="tech of project.technologies" :key="tech" class="pill">{{ tech }}</p>
    </div>
    <h4 v-if="project.description" v-html="project.description"></h4>
    <div class="flex justify-end mt-3">
      <a v-if="project.url" :href="project.url" target="_blank">View more <i class='bx bx-link-external' /></a>
    </div>
  </dialog>

  <div class="card" @click="openDialog">
    <img :alt="project.title" :src="project.imgUrl" :class="project.device === 'mobile' ? 'card--thumbnail-mobile' : 'card--thumbnail'"/>
    <div class="card--overlay">
      <p class="card--title">{{ project.title }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '/src/assets/styles/variables';

.card {
  width: 100%;
  aspect-ratio: 16/9;
  position: relative;
  display: flex;
  justify-content: center;
  flex: 0 0 auto;

  &--thumbnail {
    width: 100%;
    height: auto;
  }

  &--thumbnail-mobile {
    height: 100%;
    width: auto;
  }

  &--overlay {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(black, 0.7);
    backdrop-filter: blur(5px);
    transition: 0.5s;
  }

  &--title {
    font-size: 2rem;
    font-weight: bolder;
    text-align: center;
    user-select: none;
  }

  &:hover {
    cursor: pointer;

    .card--overlay {
      visibility: visible;
      opacity: 1;
    }
  }
}

.dialog {
  opacity: 0;
  transition: 2s;
  width: 700px;
  border-radius: 1rem;
  color: $color-primary;

  &::backdrop {
    background-color: rgba(black, 0.7);
    backdrop-filter: blur(5px);
    animation: fade-in 0.5s forwards;
  }

  img {
    max-height: 20rem;
  }
}

.dialog[open] {
  opacity: 1;
  animation: fade-in 0.5s forwards;
}

.dialog[close] {
  opacity: 0;
  animation: fade-out 0.5s forwards;
}

.close-btn {
  font-size: 2rem;
  transition: 0.5s;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

  &:hover {
    background-color: $color-primary;
    color: $color-secondary;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}


@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@media (max-width: $breakpoint-tablet) {
  .card {
    width: 100%;
  }
}
</style>