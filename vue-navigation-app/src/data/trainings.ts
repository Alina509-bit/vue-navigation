import type { Training } from '@/types/training'

// Gewichte in kg; bei Kurzhanteln pro Hantel, bei Kabelzügen pro verwendetem Zug.
// Körpergewichtsübungen verwenden weight: 0 (kein Zusatzgewicht).
export const trainings: Training[] = [
  {
    id: 1, date: '2026-08-24', type: 'Push', duration: 55,
    exercises: [
      { exerciseId: 1, sets: [{ weight: 60, reps: 10 }, { weight: 65, reps: 8 }, { weight: 65, reps: 8 }] },
      { exerciseId: 5, sets: [{ weight: 16, reps: 10 }, { weight: 16, reps: 10 }, { weight: 16, reps: 8 }] },
      { exerciseId: 6, sets: [{ weight: 6, reps: 15 }, { weight: 6, reps: 12 }] },
      { exerciseId: 11, sets: [{ weight: 20, reps: 12 }, { weight: 20, reps: 12 }, { weight: 20, reps: 10 }] },
    ],
  },
  {
    id: 2, date: '2026-08-26', type: 'Pull', duration: 50,
    exercises: [
      { exerciseId: 7, sets: [{ weight: 0, reps: 8 }, { weight: 0, reps: 7 }, { weight: 0, reps: 6 }] },
      { exerciseId: 9, sets: [{ weight: 45, reps: 12 }, { weight: 50, reps: 10 }, { weight: 50, reps: 10 }] },
      { exerciseId: 10, sets: [{ weight: 10, reps: 12 }, { weight: 10, reps: 10 }, { weight: 10, reps: 10 }] },
    ],
  },
  {
    id: 3, date: '2026-08-28', type: 'Legs', duration: 65,
    exercises: [
      { exerciseId: 12, sets: [{ weight: 70, reps: 10 }, { weight: 75, reps: 8 }, { weight: 75, reps: 8 }] },
      { exerciseId: 16, sets: [{ weight: 60, reps: 10 }, { weight: 60, reps: 10 }, { weight: 60, reps: 8 }] },
      { exerciseId: 14, sets: [{ weight: 35, reps: 12 }, { weight: 35, reps: 12 }] },
      { exerciseId: 17, sets: [{ weight: 40, reps: 15 }, { weight: 40, reps: 15 }, { weight: 40, reps: 12 }] },
    ],
  },
  {
    id: 4, date: '2026-08-31', type: 'Upper Body', duration: 60,
    exercises: [
      { exerciseId: 2, sets: [{ weight: 22, reps: 10 }, { weight: 22, reps: 10 }, { weight: 22, reps: 8 }] },
      { exerciseId: 8, sets: [{ weight: 50, reps: 12 }, { weight: 55, reps: 10 }, { weight: 55, reps: 10 }] },
      { exerciseId: 5, sets: [{ weight: 14, reps: 12 }, { weight: 14, reps: 10 }] },
      { exerciseId: 9, sets: [{ weight: 45, reps: 12 }, { weight: 45, reps: 12 }] },
    ],
  },
  {
    id: 5, date: '2026-09-02', type: 'Lower Body', duration: 55,
    exercises: [
      { exerciseId: 13, sets: [{ weight: 120, reps: 12 }, { weight: 130, reps: 10 }, { weight: 130, reps: 10 }] },
      { exerciseId: 15, sets: [{ weight: 30, reps: 12 }, { weight: 30, reps: 12 }, { weight: 30, reps: 10 }] },
      { exerciseId: 17, sets: [{ weight: 40, reps: 15 }, { weight: 40, reps: 15 }] },
      { exerciseId: 19, sets: [{ weight: 0, reps: 20 }, { weight: 0, reps: 20 }] },
    ],
  },
  {
    id: 6, date: '2026-09-04', type: 'Full Body', duration: 70,
    exercises: [
      { exerciseId: 12, sets: [{ weight: 65, reps: 10 }, { weight: 65, reps: 10 }, { weight: 65, reps: 10 }] },
      { exerciseId: 20, sets: [{ weight: 0, reps: 15 }, { weight: 0, reps: 12 }, { weight: 0, reps: 12 }] },
      { exerciseId: 9, sets: [{ weight: 45, reps: 12 }, { weight: 45, reps: 12 }, { weight: 45, reps: 10 }] },
      { exerciseId: 16, sets: [{ weight: 50, reps: 12 }, { weight: 50, reps: 12 }] },
      { exerciseId: 19, sets: [{ weight: 0, reps: 20 }, { weight: 0, reps: 15 }] },
    ],
  },
  {
    id: 7, date: '2026-09-07', type: 'Push', duration: 55,
    exercises: [
      { exerciseId: 3, sets: [{ weight: 50, reps: 12 }, { weight: 55, reps: 10 }, { weight: 55, reps: 10 }] },
      { exerciseId: 4, sets: [{ weight: 10, reps: 15 }, { weight: 12.5, reps: 12 }, { weight: 12.5, reps: 12 }] },
      { exerciseId: 5, sets: [{ weight: 16, reps: 10 }, { weight: 16, reps: 10 }, { weight: 16, reps: 10 }] },
      { exerciseId: 11, sets: [{ weight: 22.5, reps: 12 }, { weight: 22.5, reps: 10 }] },
    ],
  },
  {
    id: 8, date: '2026-09-09', type: 'Pull', duration: 50,
    exercises: [
      { exerciseId: 8, sets: [{ weight: 55, reps: 12 }, { weight: 60, reps: 10 }, { weight: 60, reps: 8 }] },
      { exerciseId: 9, sets: [{ weight: 50, reps: 12 }, { weight: 50, reps: 12 }, { weight: 50, reps: 10 }] },
      { exerciseId: 10, sets: [{ weight: 12, reps: 10 }, { weight: 12, reps: 10 }, { weight: 12, reps: 8 }] },
    ],
  },
  {
    id: 9, date: '2026-09-11', type: 'Legs', duration: 65,
    exercises: [
      { exerciseId: 12, sets: [{ weight: 75, reps: 10 }, { weight: 80, reps: 8 }, { weight: 80, reps: 8 }, { weight: 70, reps: 10 }] },
      { exerciseId: 15, sets: [{ weight: 35, reps: 12 }, { weight: 35, reps: 10 }, { weight: 35, reps: 10 }] },
      { exerciseId: 14, sets: [{ weight: 40, reps: 12 }, { weight: 40, reps: 10 }] },
      { exerciseId: 17, sets: [{ weight: 45, reps: 15 }, { weight: 45, reps: 15 }, { weight: 45, reps: 12 }] },
    ],
  },
  {
    id: 10, date: '2026-09-14', type: 'Upper Body', duration: 60,
    exercises: [
      { exerciseId: 1, sets: [{ weight: 65, reps: 10 }, { weight: 70, reps: 8 }, { weight: 70, reps: 8 }] },
      { exerciseId: 7, sets: [{ weight: 0, reps: 9 }, { weight: 0, reps: 8 }, { weight: 0, reps: 7 }] },
      { exerciseId: 6, sets: [{ weight: 7, reps: 12 }, { weight: 7, reps: 12 }] },
      { exerciseId: 10, sets: [{ weight: 10, reps: 12 }, { weight: 10, reps: 12 }] },
      { exerciseId: 11, sets: [{ weight: 20, reps: 12 }, { weight: 20, reps: 12 }] },
    ],
  },
  {
    id: 11, date: '2026-09-16', type: 'Lower Body', duration: 55,
    exercises: [
      { exerciseId: 13, sets: [{ weight: 130, reps: 12 }, { weight: 140, reps: 10 }, { weight: 140, reps: 10 }] },
      { exerciseId: 16, sets: [{ weight: 65, reps: 10 }, { weight: 65, reps: 10 }, { weight: 65, reps: 10 }] },
      { exerciseId: 17, sets: [{ weight: 45, reps: 15 }, { weight: 45, reps: 15 }] },
      { exerciseId: 19, sets: [{ weight: 0, reps: 20 }, { weight: 0, reps: 20 }, { weight: 0, reps: 15 }] },
    ],
  },
  {
    id: 12, date: '2026-09-18', type: 'Full Body', duration: 70,
    exercises: [
      { exerciseId: 13, sets: [{ weight: 120, reps: 12 }, { weight: 120, reps: 12 }, { weight: 120, reps: 10 }] },
      { exerciseId: 2, sets: [{ weight: 24, reps: 10 }, { weight: 24, reps: 10 }, { weight: 24, reps: 8 }] },
      { exerciseId: 8, sets: [{ weight: 55, reps: 12 }, { weight: 55, reps: 12 }, { weight: 55, reps: 10 }] },
      { exerciseId: 15, sets: [{ weight: 30, reps: 12 }, { weight: 30, reps: 12 }] },
      { exerciseId: 20, sets: [{ weight: 0, reps: 12 }, { weight: 0, reps: 10 }] },
    ],
  },
]
