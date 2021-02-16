import { getJournalEntries, useJournalEntries } from "./journalEntries/JournalDataProvider.js";
import { EntryListComponent } from "./journalEntries/JournalEntryList.js"
import { JournalFormComponent } from "./journalEntries/JournalFormComponent.js"
import { FilterBar } from "./filter/FilterBar.js"

getJournalEntries()
.then(() => {
 const _entries = useJournalEntries()
 JournalFormComponent()
 EntryListComponent(_entries)
 FilterBar()
})
