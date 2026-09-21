export interface TrainingSet {
  /** Gewicht in kg; 0 steht für Training ohne Zusatzgewicht. */
  weight: number
  reps: number
}

export interface TrainingExercise {
  exerciseId: number
  sets: TrainingSet[]
}

export interface Training {
  id: number
  /** Datum im Format YYYY-MM-DD. */
  date: string
  type: string
  /** Dauer in Minuten. */
  duration: number
  exercises: TrainingExercise[]
}
