import { useEffect, useState } from "react"
import { fetchCountries, type Country } from "./data/countries"
import CountryCard from "./components/CountryCard"
import Controls from "./components/Controls"
import "./App.css"

function useCountries(continent?: string){
  const [countries, setCountries] = useState<Country[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    fetchCountries(controller.signal, continent)
      .then(data => {
        setCountries(data)
        setLoading(false)
      })
      .catch(err => {
        if (controller.signal.aborted) return
        setError(err instanceof Error ? err.message : "Error desconocido")
        setLoading(false)
      })

    return () => controller.abort()
  }, [continent])

  return { countries, loading, error }
}

function App() {
  const [continent, setContinent] = useState<string>("Oceania")
  const { countries, loading, error } = useCountries(continent)
  const [displayed, setDisplayed] = useState<Country[]>([])

  const lastCountry = displayed.at(-1)
  const remaining = countries.filter(
    c => !displayed.some(d => d.name === c.name)
  )

  function handleNext() {
    if (remaining.length === 0) return
    const index = Math.floor(Math.random() * remaining.length)
    setDisplayed([...displayed, remaining[index]])
  }

  function restart() {
    setDisplayed([])
  }

  function handleContinentChange(continent: string){
    setContinent(continent)
    restart()
  }

  if (loading) return <p>Cargando países...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <>
      <section>
       <Controls
         onNext={handleNext}
         onRestart={restart}
         disabled={remaining.length === 0}
         continent={continent}
         onContinentChange={handleContinentChange}
       />
        {lastCountry && <CountryCard country={lastCountry} />}
      </section>
      <h3>Países vistos: {displayed.length}</h3>
    </>
  )
}

export default App