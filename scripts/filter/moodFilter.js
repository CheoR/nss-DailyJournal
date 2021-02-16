import { getMoods, useMoods } from "../moods/MoodDataProvider.js"

const eventHub = document.querySelector("main")

export const moodFilter = ( moodsCollection ) => {
 const _moods = moodsCollection.map((mood) => {
  return `
    <input type="radio" name="moodFilter" id="${ mood.id }" value="${ mood.id }" />
    <label for="${ mood.id }" >${ mood.label }</label>
  `
 }).join("") // moods.map

 return `
   <fieldset class="fieldset">
    <legend>Filter Entries by Mood</legend>
    <input type="radio" name="moodFilter" id="0" value="0" />
    <label for="0" >All</label>
    ${_moods}
   </fieldset>
 `
} // moodFilter


eventHub.addEventListener("click", clickEvent => {
  if(clickEvent.target.name === "moodFilter") {
    const moodId = parseInt(clickEvent.target.id)
    const customEvent = new CustomEvent("moodSelected", {
      detail: {
        moodId: moodId
      }
    }) // CustomEvent
    eventHub.dispatchEvent(customEvent)
  } // if
}) // eventHub - click