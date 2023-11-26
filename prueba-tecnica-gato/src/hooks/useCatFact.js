import { useEffect, useState } from "react";
import { getRandomFact } from "../services/facts";

export default () => {
  const [fact, setFact] = useState(null)
  useEffect(() => {
    
  }, [])

  const refreshFact = () => {
    getRandomFact().then(setFact);
  }
  return { fact, refreshFact }
}