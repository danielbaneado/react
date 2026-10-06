import hezbollahFlag from "./assets/hezbollah-38-1.webp"
import talibanFlag from './assets/images.png'
import ottomanFlag from './assets/Flag_of_Ottoman_Empire_(1517-1793).png'
import KSA from "./assets/KSA.svg"
import Bahrain from "./assets/Bahrain.png"
import Egypt from "./assets/Egypt.png"
import Iraq from "./assets/Iraq.webp"
import Israel from "./assets/Israel.png"
import Iran from "./assets/Iran.webp"
import Kuwait from "./assets/Kuwait.webp"
import Lebanon from "./assets/Lebanon.webp"
import Qatar from "./assets/Qatar.webp"
import Oman from "./assets/Oman.png"
import Syria from "./assets/Syria.webp"
import Turkey from "./assets/Turkiye.webp"
import UAE from "./assets/UAE.webp"
import './App.css'
import { useState } from "react"

interface CountryCardProps{
  country: Country;
  flag: string;
}

const middleEast= {
  Bahrain, 
  Egypt, 
  Iraq, 
  Iran, 
  Israel, 
  Kuwait, 
  Lebanon, 
  Qatar, 
  Oman, 
  "Saudi Arabia": KSA, 
  Syria, 
  Turkey, 
  "United Arab Emirates": UAE
}
type Country = keyof typeof middleEast
const countryNames= Object.keys(middleEast) as Country[]

function CountryCard({ country, flag }: CountryCardProps) {
  return (
    <div>
      <img src={flag} height="120" alt={`Flag of ${country}`} />
      <h2>{country}</h2>
    </div>
  )
}

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
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={handleClick}
        >
        Click to show a random middle east country
        </button>
        {lastCountry && (
          <>
            <img src={middleEast[lastCountry]} className="base" height="120" alt={`Flag of ${lastCountry}`} />
            <h2>{lastCountry}</h2>
          </>
        )}
      </section>
      <button type="button" className="counter" onClick={restart}>Restart</button>
      <h3>Clicks: {displayedCountries.length}</h3>
    </>
  )
}

export default App
