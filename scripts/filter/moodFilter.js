/*
 Get a copy of moods.

*/
const eventHub = document.querySelector("main")

const moods = [
  {
    id: 1,
    label: "happy"
  },
  {
    id: 2,
    label: "sad"
  },
  {
    id: 3,
    label: "cold"
  }
]
export const moodFilter = () => {
 const _moods = moods.map((mood) => {
  return `
    <input type="radio" name="moodFilter" id="${ mood.id }" value="${ mood.id }" />
    <label for="${ mood.id }" >${ mood.label }</label>
  `
 }).join("") // moods.map
 
 return `
   <fieldset class="fieldset">
    <legend>Filter Entries by Mood</legend>
    ${_moods}
   </fieldset>
 `
}

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