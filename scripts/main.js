import { useJournalEntries } from "./JournalDataProvider.js";

const allJournalEntries = useJournalEntries();

for (const entry of allJournalEntries) {
    console.log(entry);
}

