import { getEntries } from "./journalEntries/JournalDataProvider.js";
import { EntryListComponent } from "./journalEntries/JournalEntryList.js"
import { JournalFormComponent } from "./journalEntries/JournalFormComponent.js"

JournalFormComponent()
getEntries().then(() => EntryListComponent())
