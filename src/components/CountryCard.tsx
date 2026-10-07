import { middleEast, type Country } from "../data/countries"

interface CountryCardProps{
  country: Country
  size?: number
}

export default function CountryCard({ country, size = 120 }: CountryCardProps) {
  return (
    <div>
      <img src={middleEast[country]} height={size} alt={`Flag of ${country}`} />
      <h2>{country}</h2>
    </div>
  )
}