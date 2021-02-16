import { getInstructors, useInstructors } from "./instructorDataProvider.js"


const _render = ( instructorCollection ) => {
 const contentTarget = document.querySelector("#instructorSelect")
 const instructors = instructorCollection.map((instructor) =>
  `<option value="${instructor.id}">${instructor.firstName} ${instructor.lastName}</option>`
 ).join("") // instructorCollection.map

 contentTarget.innerHTML += `${instructors}`

} // _render


export const instructorSelect = () => {
 getInstructors()
  .then(() => {
   const instructors = useInstructors()
   _render(instructors)
  })
}
