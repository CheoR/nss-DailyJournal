let journal = []
const eventHub = document.querySelector("main")

/*
    Hardcoded data moved to entires.json for api use.
*/

export const useJournalEntries = () => journal.sort(_byDate)


export const getEntries = () => {
    return fetch("http://localhost:8088/entries")
        .then((entries) => entries.json()) // string to object
        .then((entries) => { // entries is now an arrayd
            journal = entries
        })
    }


const dispatchStateChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("journalStateChanged"))
}


export const saveJournalEntry = ( entryObj ) => {
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


const _byDate = (currDate, nextDate) => {
    if ( Date.parse(nextDate.date) < Date.parse(currDate.date) ) { return -1; }
    if ( Date.parse(nextDate.date) > Date.parse(currDate.date) ) { return 1; }
    return 0;
}
