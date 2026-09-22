<script setup lang="ts">
import TrainingCard from '@/components/TrainingCard.vue'
import { trainings } from '@/data/trainings'
import heroImage from '@/assets/images/trainings-hero.png'
</script>

<template>
  <h1>Trainingsübersicht</h1>
  <img class="hero" :src="heroImage" alt="Zwei Sportler beim Training in einer hellen Halle" />
  <div class="card-grid">
    <TrainingCard v-for="training in trainings" :key="training.id" :training="training" />
  </div>
</template>

<style scoped>
h1 {
  font-size: clamp(2rem, 5vw, 3rem);
  text-align: left;
}

.hero {
  display: block;
  width: 100%;
  height: clamp(12rem, 32vw, 24rem);
  margin-bottom: var(--space-8);
  border-radius: var(--radius-lg);
  object-fit: cover;
  object-position: 60% 40%;
}
</style>
