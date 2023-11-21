import { useEffect, useState } from "react"

const App = () => {
  
  const [fact, setFact] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(res => res.json())
      .then(data => {
        const fact = data.fact;
        setFact(fact)
        const initialWords = fact.split(" ").slice(0,3).join(" ");

        fetch(`https://cataas.com/cat/says/${initialWords}?size=50&json=true`)
          .then(res => res.json())
          .then(data => {
            console.log(data)
            setImageUrl(`https://cataas.com/cat/says/${initialWords}`)
          })
      })
  }, [])

  return (
    <main>
      {fact && <p>{fact}</p>}
      {imageUrl && <img alt={`Image extracted using three first three words for ${fact}`} src={imageUrl} />}
    </main>
  )
}

export default App