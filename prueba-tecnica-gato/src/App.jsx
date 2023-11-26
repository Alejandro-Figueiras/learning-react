import useCatImage from "./hooks/useCatImage"
import useCatFact from "./hooks/useCatFact"

const App = () => {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({fact})

  return (
    <main>
      <button onClick={refreshFact}>Get new Fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img alt={`Image extracted using three first three words for ${fact}`} src={imageUrl} />}
    </main>
  )
}

export default App