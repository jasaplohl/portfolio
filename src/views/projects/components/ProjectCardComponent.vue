<script lang="ts" setup>
import type { PropType, Ref } from "vue";
import { ref } from 'vue';

const dialog: Ref<HTMLDialogElement | null> = ref(null);

defineProps({
  title: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true,
  },
  technologies: {
    type: Object as PropType<String[]>,
    required: true,
  },
  url: {
    type: String,
    required: false,
    default: undefined,
  }
});

const onCardClick = () => {
  dialog.value?.showModal();
};
</script>

<template>
  <dialog class="dialog" ref="dialog">
    <p>Hello</p>
  </dialog>
  <div class="card" @click="onCardClick">
    <img :alt="title" :src="thumbnail" class="card--thumbnail"/>
    <div class="card--overlay">
      <p class="card--title">{{ title }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'src/assets/styles/variables';

.card {
  height: 20rem;
  flex: 0 0 auto;
  position: relative;

  &--thumbnail {
    height: 100%;
    object-fit: cover;
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
  }

  &--title {
    font-size: 2rem;
    font-weight: bolder;
    text-align: center;
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
  transition: opacity 2s;

  &::backdrop {
    background-color: rgba(black, 0.7);
    backdrop-filter: blur(5px);
  }
}

.dialog[open] {
  opacity: 1;
}
</style>