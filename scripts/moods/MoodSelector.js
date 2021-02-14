import { getMoods, useMoods } from "./MoodDataProvider.js"

const _render = (moodCollection) => {
 const contentTarget = document.querySelector("#moodSelect")
 const options = moodCollection.map((mood) => `<option value="${mood.id}">${mood.label}</option>`).join("") // moodCollection.map

 contentTarget.innerHTML += `${options}`
}

export const MoodSelector = () => {
 getMoods()
  .then(() => {
   const moods = useMoods()
   _render(moods)
  })
}
