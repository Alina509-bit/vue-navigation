import { exercises } from '@/data/exercises'
import { trainings } from '@/data/trainings'
import type { Exercise } from '@/types/exercise'
import type { Training } from '@/types/training'

function parseId(id: number | string): number | undefined {
  if (typeof id === 'string' && !/^\d+$/.test(id)) return undefined
  const value = Number(id)
  return Number.isSafeInteger(value) && value > 0 ? value : undefined
}

export function getExerciseById(id: number | string): Exercise | undefined {
  const parsedId = parseId(id)
  return exercises.find((exercise) => exercise.id === parsedId)
}

export function getTrainingById(id: number | string): Training | undefined {
  const parsedId = parseId(id)
  return trainings.find((training) => training.id === parsedId)
}

export function getExerciseAlternatives(exercise: Exercise): Exercise[] {
  return exercise.alternatives
    .map(getExerciseById)
    .filter((alternative): alternative is Exercise => alternative !== undefined)
}
