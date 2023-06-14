<script lang="ts" setup>
import {personalProjects, projects} from "@/data/projects";
</script>

<template>
  <div class="page page--center page--alternate">
    <h2>This are some of the projects I have worked on</h2>
    <ul>
      <li :key="project.title" v-for="project of projects">
        <p>{{ project.title }}</p>
<!--        <p>WhiteHydrogen (VueJS, AWS, Stripe, Blockchain, Onfido, Tatum ...)</p>-->
<!--        <p>Devleet minting website (VueJS, blockchain)</p>-->
<!--        <p>MovieNight (Flutter, TMDB api, Firebase)</p>-->
<!--        <p>MovieWatch (Angular, TMDB api)</p>-->
      </li>
    </ul>
    <h2>Personal projects</h2>
    <ul>
      <li :key="project.title" v-for="project of personalProjects">
        <p>{{ project.title }}</p>
      </li>
    </ul>
  </div>
</template>