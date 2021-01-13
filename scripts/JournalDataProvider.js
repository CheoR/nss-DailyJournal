/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok"
    },
    {
        id: 2,
        date: "07/25/2025",
        concept: "Career Guidence",
        entry: "We had a career guidence talk about updating our linkedin and how to approach recruiters.",
        mood: "Ok"
    },
    {
        id: 3,
        date: "07/27/2025",
        concept: "GitHub & team collaboration",
        entry: "Worked in teams to practice github collaboration.",
        mood: "Hopeful"
    },
]

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