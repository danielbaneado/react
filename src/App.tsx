import hezbollahFlag from "./assets/hezbollah-38-1.webp"
import talibanFlag from './assets/images.png'
import ottomanFlag from './assets/Flag_of_Ottoman_Empire_(1517-1793).png'
import './App.css'
import { useState } from "react"
import {type Country, countryNames } from "./data/countries"
import CountryCard from "./components/CountryCard"
import History from "./components/History"
import Controls from "./components/Controls"

function App() {
  const [displayedCountries, setDisplayedCountries]= useState<Country[]>([])
  const lastCountry= displayedCountries.at(-1)
  const remaining= countryNames.filter(c => !displayedCountries.includes(c))

  function handleClick() {
    if(remaining.length=== 0) return
    const index= Math.floor(Math.random() * remaining.length)
    const country= remaining[index]
    setDisplayedCountries([...displayedCountries, country])
  }

  function restart(){
    setDisplayedCountries([])
  }

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={hezbollahFlag} className="base" height="120" alt="Hezbollah flag" />
          <img src={talibanFlag} className="base" height="120" alt="Taliban flag" />
          <img src={ottomanFlag} className="base" height="120" alt="Ottoman empire peak" />
        </div>
        <div>
          <h1>Country test</h1>
        </div>
        <Controls
          onNext={handleClick}
          onRestart={restart}
          disabled={remaining.length === 0}
        />
        {lastCountry && (
          <CountryCard country={lastCountry} />
        )}
        <History countries={displayedCountries} title="Países vistos" />
      </section>
      <h3>Clicks: {displayedCountries.length}</h3>
    </>
  )
}

export default App
