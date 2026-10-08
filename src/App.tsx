import { useEffect, useState } from "react"
import { fetchMiddleEast, type Country } from "./data/countries"
import CountryCard from "./components/CountryCard"
import History from "./components/History"
import Controls from "./components/Controls"
import "./App.css"

function useCountries(){
  const [countries, setCountries] = useState<Country[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    fetchMiddleEast(controller.signal)
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
  }, [])

  return { countries, loading, error }
}

function App() {
  const { countries, loading, error } = useCountries()
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

  if (loading) return <p>Cargando países...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <>
      <section id="center">
        <Controls
          onNext={handleNext}
          onRestart={restart}
          disabled={remaining.length === 0}
        />
        {lastCountry && <CountryCard country={lastCountry} />}
        <History countries={displayed} title="Países vistos" />
      </section>
      <h3>Países vistos: {displayed.length}</h3>
    </>
  )
}

export default App