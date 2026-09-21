<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getExerciseById } from '@/utils/data'

const route = useRoute()
const exercise = computed(() => {
  const id = route.params.id
  return typeof id === 'string' ? getExerciseById(id) : undefined
})
</script>

<template>
  <template v-if="exercise">
    <h1>{{ exercise.name }}</h1>
    <dl>
      <dt>Muskelgruppe</dt>
      <dd>{{ exercise.muscleGroup }}</dd>
      <dt>Equipment</dt>
      <dd>{{ exercise.equipment }}</dd>
      <dt>Beschreibung</dt>
      <dd>{{ exercise.description }}</dd>
    </dl>
  </template>
  <template v-else>
    <h1>Übung Detail</h1>
    <p>Übung nicht gefunden.</p>
  </template>
</template>
