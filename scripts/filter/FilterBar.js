import { moodFilter } from "./moodFilter.js"

const contentTarget = document.querySelector(".filters")

export const FilterBar = () => contentTarget.innerHTML = `${moodFilter()}`
