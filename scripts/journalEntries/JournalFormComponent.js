import { saveJournalEntry } from "./JournalDataProvider.js"
import { MoodSelector } from "../moods/MoodSelector.js"
import { instructorSelect } from "../instructors/instructorSelector.js"

const eventHub = document.querySelector("main")
const contentTarget = document.querySelector(".main__article")

export const JournalFormComponent = () => _render()


const _render = () => {
 contentTarget.innerHTML = `
  <h2>Daily Journal</h2>
  <form action="" method="POST" class="main_section__form">
      <fieldset>
          <label for="journalDate">Date of Entry</label>
          <input type="date" name="journalDate" id="journalDate">

          <label for="instructorSelect">Instructor:</label>
            <select name="instructorSelect" id="instructorSelect">
            <option value="0">Instructor</option>
            </select>

          <label for="conceptsCovered">Concepts Covered </label>
          <input type="text" name="conceptsCovered" id="conceptsCovered" required>
          
            <label for="moodSelect">Mood:</label>
            <select name="moodSelect" id="moodSelect">
            <option value="0">--How am I feeling?--</option>
            </select>

          <label for="journalEntry">Journal Entry</label>

          <textarea id="journalEntry" name="journalEntry" rows="5" cols="33" placeholder="Today we covered . . "></textarea>
      </fieldset>
      <input id="submit" type="submit" value="Submit" />
  </form>
 `
 MoodSelector()
 instructorSelect()

}


const _createNewNoteFactory = () => {
 const dateObj = new Date()

 const options = {
  hour: '2-digit',
  minute: '2-digit',
  year: "numeric",  
  month: "numeric",  
  day: "numeric"
 }

 const _date = document.querySelector("#journalDate").value || `${dateObj.toLocaleDateString('en-US', options)}`
 const _concepts = document.querySelector("#conceptsCovered").value
 const _mood = parseInt(document.querySelector("#moodSelect").value)
 const _entry = document.querySelector("#journalEntry").value
 const _instructor = parseInt(document.querySelector("#instructorSelect").value) || 1 // No selction defaults to "My Self"


 if(_concepts.length > 25) {
  window.alert("25 Character limit. You write too much - as punishment, start over.")
  return 0
 }

 if(_entry.length > 250) {
  window.alert("250 Character limit. You write too much - as punishment, start over.")
  return 0
 }

 const newNote = {
  date: _date,
  concept: _concepts,
  moodId: _mood,
  instructorId: _instructor,
  entry: _entry
 }

 return newNote
} // _createNewNoteFactory

eventHub.addEventListener("click", clickEvent => {
 clickEvent.preventDefault()
 
 if(clickEvent.target.value === "Submit") {

  const newNote = _createNewNoteFactory()

  if(newNote.entry && newNote.moodId && newNote.concept) {
   saveJournalEntry(newNote)

   // show user form submitted
   document.querySelector(".main_section__form").reset()
  } else {
   window.alert("Form fields must be filled to submit.")
   _render()
  }
 } // if
}) // eventHub - click