import { useState } from "react"
import { type Country } from "./data/countries"
import CountryCard from "./components/CountryCard"
import Controls from "./components/Controls"
import "./App.css"
import { useCountries } from "./hooks/useCountries"

function App() {
  const [continent, setContinent] = useState("Oceania")
  const [displayed, setDisplayed] = useState<Country[]>([])
  const { data: countries = [], isPending, error, refetch } = useCountries()

  const inContinent = countries.filter(
    c => !continent || c.continents.some(x => x.toLowerCase() === continent.toLowerCase())
  )
  const remaining = inContinent.filter(c => !displayed.some(d => d.name === c.name))
  const lastCountry = displayed.at(-1)

  function handleNext() {
    if (remaining.length === 0) return
    const index = Math.floor(Math.random() * remaining.length)
    setDisplayed([...displayed, remaining[index]])
  }

  function restart() {
    setDisplayed([])
  }

  function handleContinentChange(newContinent: string){
    setContinent(newContinent)
    restart()
  }

  return (
    <>
      <section>
       <Controls
        onNext={handleNext}
        onRestart={restart}
        disabled={isPending || remaining.length === 0}
        continent={continent}
        onContinentChange={handleContinentChange}
       />
        {isPending && <p>Cargando países...</p>}
        {error && <section>
          <p>Error: {error.message}</p>
          <button onClick={() => refetch()}>Reintentar</button>
          </section>
        }
        {lastCountry && <CountryCard country={lastCountry} />}
      </section>
      <h3>Países vistos: {displayed.length}</h3>
    </>
  )
}

export default App