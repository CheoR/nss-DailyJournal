let _moods = []

export const useMoods = () => _moods.slice()

export const getMoods = () => {
 return fetch("http://localhost:8088/moods")
  .then(response => response.json())
  .then(parsedData => {
   _moods = parsedData
  })
}
