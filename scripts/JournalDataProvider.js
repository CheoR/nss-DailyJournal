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