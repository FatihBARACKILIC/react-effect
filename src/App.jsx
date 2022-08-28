import { useEffect, useState } from "react"

function App() {
  const [number, setNumber] = useState(0)
  const [firstName, setFirstName] = useState("Fatih")

  useEffect(() => {
    console.log("Component mount edildi!")
  }, [])

  useEffect(() => {
    console.log("Number state güncellendi!")
  }, [number])

  useEffect(() => {
    console.log("Name state güncellendi!")
  }, [firstName])

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>

      <hr />

      <h1>{firstName}</h1>
      <button onClick={() => setFirstName("Ali")}>Click</button>
    </>
  )
}

export default App
