const eventHub = document.querySelector("main")

export const deleteBnt = ( id ) => `<button id="delete--${id}" class="deleteBtn">Delete</button>`

eventHub.addEventListener("click", clickEvent => {
 if(clickEvent.target.id.includes("delete")) {
  const [_disgard, _id] = clickEvent.target.id.split("--")
  const customEvent = new CustomEvent("deleteBtnClicked", {
   detail: {
    id: parseInt(_id)
   }
  }) // customEvent - deleteBtnClicked
  eventHub.dispatchEvent(customEvent)
 } // 
}) // eventHub - click
