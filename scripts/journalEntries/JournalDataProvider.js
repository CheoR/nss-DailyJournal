let journal = []
const eventHub = document.querySelector("main")

/*
Hardcoded data moved to entires.json for api use.
*/


export const useJournalEntries = () => journal.sort(_byDate)
const journalStateChanged = new CustomEvent("journalStateChanged")
const dispatchStateChangeEvent = () => eventHub.dispatchEvent(journalStateChanged)

export const getEntries = () => {
    /*
        Old way of entering mood.
        http://localhost:8088/entries
    [
        {
            "date": "1/31/2021, 09:24 AM",
            "concept": "dfadfdfff",
            "mood": "emotion",
            "entry": "afadf",
            "id": 1
        },
    ]
        entries?_expand=mood - expends moodId to include mood table.
        http://localhost:8088/entries?_expand=mood
    [
        {
            "date": "1/31/2021, 09:24 AM",
            "concept": "dfadfdfff",
            "moodId": 4,
            "entry": "afadf",
            "id": 1,
            "mood": {
                "id": 4,
                "label": "sad"
            }
        },
    ]

    expand more than one fk
    http://localhost:8088/entries?_expand=instructor&_expand=mood
    [
  {
    "date": "1/31/2021, 09:24 AM",
    "concept": "dfadfdfff",
    "moodId": 4,
    "instructorId": 1,
    "entry": "afadf",
    "id": 1,
    "instructor": {
      "id": 1,
      "firstName": "Myself",
      "lastName": ""
    },
    "mood": {
      "id": 4,
      "label": "sad"
    }
  }
]
    */
    //    return fetch("http://localhost:8088/entries?_expand=mood?_expand=instructor")

    return fetch("http://localhost:8088/entries?_expand=instructor&_expand=mood")
        .then((entries) => entries.json()) // string to object
        .then((entries) => { // entries is now an arrayd
            journal = entries
        })
    }



export const saveJournalEntry = ( entryObj ) => {
    /*
        TODO: change to use event l
    */
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
} // saveJournalEntry


eventHub.addEventListener("deleteBtnClicked", clickEvent => {
    const _id = clickEvent.detail.id
    const _url = `http://localhost:8088/entries/${_id}`
    fetch(_url, {
        method: "DELETE"
    })
        .then(getEntries)
        .then(dispatchStateChangeEvent)
}) // eventHub - deleteBtnClicked 


const _byDate = (currDate, nextDate) => {
    if ( Date.parse(nextDate.date) < Date.parse(currDate.date) ) { return -1; }
    if ( Date.parse(nextDate.date) > Date.parse(currDate.date) ) { return 1; }
    return 0;
}
