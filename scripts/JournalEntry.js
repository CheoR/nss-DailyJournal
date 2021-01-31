/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <h3>${entry.concept}</h3>
            <time>${entry.date}</time> - <span>${entry.mood}</span>
            <p>${entry.entry}</p>
        </section>
    `
}
