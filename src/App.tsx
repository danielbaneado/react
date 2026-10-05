import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

const middleEast= ["Bahrain", "Egypt", "Iraq", "Iran", "Israel", "Kuwait", "Lebanon", "Qatar", "Oman", "Saudi Arabia", "Syria", "Turkey", "United Arab Emirates"]
const displayedCountries= []

function getRandomCountry() {
  const index= Math.floor(Math.random() * middleEast.length)
  const randomCountry= middleEast[index]
  displayedCountries.push(randomCountry)
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
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
        >
        Click to show a random middle east country
        {displayedCountries.at(-1)}
        </button>
      </section>
    </>
  )
}

export default App
