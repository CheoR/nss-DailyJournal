import { getEntries } from "./journalEntries/JournalDataProvider.js";
import { EntryListComponent } from "./journalEntries/JournalEntryList.js"
import { JournalFormComponent } from "./journalEntries/JournalFormComponent.js"
import { FilterBar } from "./filter/FilterBar.js"

getEntries().then(() => {
 JournalFormComponent()
 EntryListComponent()
 FilterBar()
})
