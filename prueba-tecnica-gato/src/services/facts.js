export const getRandomFact = async () => {
  const res = await fetch('https://catfact.ninja/fact');
  const data = await res.json();
  return data.fact;
}