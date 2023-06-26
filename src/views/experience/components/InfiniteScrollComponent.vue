<script lang="ts" setup>
interface Item {
  title: string;
  icon: string;
}

const scrollItems: Item[] = [
  {
    title: 'TypeScript',
    icon: 'bx bxl-typescript',
  },
  {
    title: 'JavaScript',
    icon: 'bx bxl-javascript',
  },
  {
    title: 'NodeJS',
    icon: 'bx bxl-nodejs',
  },
  {
    title: 'VueJS',
    icon: 'bx bxl-vuejs',
  },
  {
    title: 'PostgreSQL',
    icon: 'bx bxl-postgresql',
  },
  {
    title: 'Java',
    icon: 'bx bxl-java',
  },
  {
    title: 'Tailwind CSS',
    icon: 'bx bxl-tailwind-css',
  },
  {
    title: 'AWS',
    icon: 'bx bxl-aws',
  },
  {
    title: 'Golang',
    icon: 'bx bxl-go-lang',
  },
  {
    title: 'Docker',
    icon: 'bx bxl-docker',
  },
  {
    title: 'Heroku',
    icon: 'bx bxl-heroku',
  },
  {
    title: 'GitHub',
    icon: 'bx bxl-github',
  },
  {
    title: 'Angular',
    icon: 'bx bxl-angular',
  },
  {
    title: 'Sass',
    icon: 'bx bxl-sass',
  },
  {
    title: 'Bootstrap',
    icon: 'bx bxl-bootstrap',
  },
  {
    title: 'Django',
    icon: 'bx bxl-django',
  },
  {
    title: 'Python',
    icon: 'bx bxl-python',
  },
  {
    title: 'Firebase',
    icon: 'bx bxl-firebase',
  },
  {
    title: 'Android',
    icon: 'bx bxl-android',
  },
  {
    title: 'Flutter',
    icon: 'bx bxl-flutter',
  },
  {
    title: 'Bitcoin',
    icon: 'bx bxl-bitcoin',
  },
];

// We add the same array twice, so that the animation is smooth
const getIconList = (): Item[] => {
  const randomizedItems: Item[] = scrollItems.sort(() => Math.random() - 0.5);
  return [...randomizedItems, ...randomizedItems];
};
</script>

<template>
  <div class="tag-list">
    <div class="inner">
      <div v-for="icon of getIconList()" :key="icon.title" class="item">
        <div class="item--tooltip">
          <p>{{ icon.title }}</p>
        </div>
        <i :class="icon.icon" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'src/assets/styles/variables';

.tag-list {
  font-size: 3.5rem;
  width: 100%;
  display: flex;
  padding-block: 1.5rem;
  overflow: hidden;
}

.inner {
  display: flex;
  width: fit-content;
  animation-name: loop;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-duration: 16000ms;

  &:hover {
    animation-play-state: paused;
  }
}

.item {
  position: relative;
  margin-right: 1rem;

  &--tooltip {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    transition: 0.5s;
    font-size: 1rem;
    top: -30%;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    background-color: $color-secondary;
    padding-inline: 1rem;
    padding-block: 0.2rem;
    border-radius: 0.5rem;
  }

  &:hover {
    cursor: help;

    .item--tooltip {
      user-select: none;
      visibility: visible;
      opacity: 1;
    }
  }
}

@keyframes loop {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>