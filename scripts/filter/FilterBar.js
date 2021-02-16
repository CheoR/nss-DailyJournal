import { moodFilter } from "./moodFilter.js"
import { getMoods, useMoods } from "../moods/MoodDataProvider.js"


const contentTarget = document.querySelector(".filters")

export const FilterBar = () => {
  getMoods()
    .then(() => {
      const _moods = useMoods()
     const fieldsetAndMoods =  moodFilter(_moods)
     contentTarget.innerHTML = `${fieldsetAndMoods}`
    });
} // moodFilter