<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getTrainingById } from '@/utils/data'

const route = useRoute()
const training = computed(() => {
  const id = route.params.id
  return typeof id === 'string' ? getTrainingById(id) : undefined
})
</script>

<template>
  <h1>Training Detail</h1>
  <dl v-if="training">
    <dt>Trainingsart</dt>
    <dd>{{ training.type }}</dd>
    <dt>Datum</dt>
    <dd><time :datetime="training.date">{{ training.date }}</time></dd>
    <dt>Dauer</dt>
    <dd>{{ training.duration }} Minuten</dd>
    <dt>Anzahl der Übungen</dt>
    <dd>{{ training.exercises.length }}</dd>
  </dl>
  <p v-else>Training nicht gefunden.</p>
</template>
