export const JournalFormComponent = () => {
 _render()
}

const contentTarget = document.querySelector(".main__article")

const _render = () => {
 contentTarget.innerHTML = `
  <h2>Daily Journal</h2>
  <form action="" method="get" class="main_section__form">
      <fieldset>
          <label for="journalDate">Date of Entry</label>
          <input type="date" name="journalDate" id="journalDate">

          <label for="conceptsCovered">Concepts Covered </label>
          <input type="text" name="conceptsCovered" id="conceptsCovered" required>
          
          <label for="mood-select">Mood:</label>
          <select name="mood" id="mood-select">
              <option value="">--How am I feeling?--</option>
              <option value="anxious">Anxious</option>
              <option value="stressed">Stressed</option>
              <option value="angry">Angry</option>
              <option value="silly">Silly</option>
              <option value="good">Good</option>
              <option value="iCanDoThis">I can do this</option>
          </select>

          <label for="journalEntry">Journal Entry</label>

          <textarea id="journalEntry" name="journalEntry"
          rows="5" cols="33" placeholder="Today we covered . . ">
          </textarea>
      </fieldset>
      <input id="submit" type="submit" value="Submit" />
  </form>
 `
}
