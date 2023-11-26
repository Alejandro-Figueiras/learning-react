import { useEffect, useState } from 'react'

export default ({fact}) => {
  const [imageUrl, setImageUrl] = useState(null)
  useEffect(() => {
    if (!fact) return;
    
    const initialWords = fact.split(" ").slice(0,3).join(" ");

    fetch(`https://cataas.com/cat/says/${initialWords}?size=50&json=true`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setImageUrl(`https://cataas.com/cat/says/${initialWords}`)
      })
  }, [fact])
  return {imageUrl}
}