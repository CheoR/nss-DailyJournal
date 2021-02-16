/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { getJournalEntries, useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

const eventHub = document.querySelector("main")

export const EntryListComponent = ( entriesCollection ) => {
    const entryLog = document.querySelector(".main__entries")
    
    entryLog.innerHTML = `
        <h2>Journal Entries</h2>
        <ul id="entryLog" class="entries__log">
            ${entriesCollection.map((entry) => JournalEntryComponent(entry)).join("")}
        </ul>
    `
}

eventHub.addEventListener("journalStateChanged", customEvent => {
 getJournalEntries().then(() => {
     const _entries = useJournalEntries()
     EntryListComponent(_entries)
 })
})


eventHub.addEventListener("moodSelected", selectEvent => {
    getJournalEntries().then(() => {
        const _entries = useJournalEntries()

        const moodId = selectEvent.detail.moodId
        const filterdMoodsById = _entries.filter((entryObj) => entryObj.moodId === moodId)

        if(moodId) {
            EntryListComponent(filterdMoodsById)
        } else {
            /*
                Either user selected All or left selection as default, which is All.
            */
            EntryListComponent(_entries)
        }
    })
})