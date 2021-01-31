let journal = []

/*
    Hardcoded data moved to entires.json for api use.
*/

export const getEntries = () => {
    return fetch("http://localhost:8088/entries")
        .then((entries) => entries.json()) // string to object
        .then((entries) => { // entries is now an arrayd
            journal = entries
        })
    }
/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}

const eventHub = document.querySelector("main")
const dispatchStateChangeEvent = () => {
    eventHub.dispatchEvent(new CuscomeEvent("journalStateChanged"))
}

const saveJournalEntry = ( entryObj ) => {
    const _url = "http://localhost:8088/entries"
    fetch(_url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entryObj)
    })
        .then(getEntries)
        .then(dispatchStateChangeEvent)
        // does calling dispatchStateChangeEvent
        // overwrite the CustomeEvent in eventHub or
        // just update the exisiting journalStateChanged
}