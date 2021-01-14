import { useJournalEntries } from "./JournalDataProvider.js";
import { EntryListComponent } from "./JournalEntryList.js"

const allJournalEntries = useJournalEntries();

for (const entry of allJournalEntries) {
    console.log(entry);
}

EntryListComponent();
