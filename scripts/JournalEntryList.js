/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { getEntries, useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

const contentTarget = document.querySelector(".main__article")
const eventHub = document.querySelector("main")

export const EntryListComponent = () => {
    const entries = useJournalEntries()
    const entryLog = document.querySelector("#entryLog")

    entryLog.innerHTML = ""
    entryLog.innerHTML = `${entries.map((entry) => JournalEntryComponent(entry)).join("")}`
}

eventHub.addEventListener("journalStateChanged", customEvent => {
 getEntries().then(() => EntryListComponent())
})