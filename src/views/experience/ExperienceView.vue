<script lang="ts" setup>
import {getTechnologies, getOtherTechnologies} from "@/data/technologies";
</script>

<template>
  <div class="gradient-alternate">
    <div class="section">
      <h2>I have experience with the following technologies</h2>

      <div class="flex flex-wrap justify-center text-5xl mt-7">
        <i class="bx bxl-typescript" />
        <i class='bx bxl-javascript' />
        <i class='bx bxl-nodejs' />
        <i class="bx bxl-vuejs" />
        <i class="bx bxl-postgresql" />
        <i class="bx bxl-java" />
        <i class='bx bxl-tailwind-css' />
        <i class='bx bxl-aws' />
        <i class='bx bxl-go-lang' />
        <i class='bx bxl-docker' />
        <i class='bx bxl-heroku' />
        <i class='bx bxl-github' />
        <i class='bx bxl-angular' />
        <i class='bx bxl-sass' />
        <i class='bx bxl-bootstrap' />
        <i class='bx bxl-django' />
        <i class='bx bxl-python' />
        <i class='bx bxl-firebase' />
        <i class='bx bxl-android' />
        <i class='bx bxl-flutter' />
        <i class='bx bxl-bitcoin' />
      </div>

      <div class="text-center flex gap-8">
        <div v-for="tech of getTechnologies()" :key="tech.group">
          <h3>{{ tech.group }}</h3>
          <ul>
            <li v-for="item of tech.items" :key="item">
              <p class="pill mb-2">{{item}}</p>
            </li>
          </ul>
        </div>
      </div>
      <h3>Other</h3>
      <div class="columns-3 gap-6">
        <p v-for="item of getOtherTechnologies().items" :key="item" class="pill mb-2">{{ item }}</p>
      </div>
    </div>
  </div>
</template>