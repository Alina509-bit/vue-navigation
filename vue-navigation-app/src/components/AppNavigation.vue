<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <nav aria-label="Hauptnavigation">
    <RouterLink
      :to="{ name: 'trainings' }"
      :class="{ 'router-link-active': route.name === 'training-detail' }"
    >Trainingseinheiten</RouterLink>
    <RouterLink
      :to="{ name: 'exercises' }"
      :class="{ 'router-link-active': route.name === 'exercise-detail' }"
    >Übungen</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding-block: 1rem;
  border-bottom: 1px solid #ccc;
}

a {
  color: #333;
}

a.router-link-active {
  font-weight: bold;
  text-decoration-thickness: 2px;
  text-underline-offset: 0.25em;
}
</style>
