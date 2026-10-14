import type { Country } from "../data/countries"

interface CountryCardProps {
  country: Country;
  size?: number;
}

export default function CountryCard({ country, size = 120 }: CountryCardProps) {
  return (
    <div>
      <img src={country.flag} height={size} alt={`Flag of ${country.name}`} />
      <h2>{country.name}</h2>
      <h2>Area: {country.area.toLocaleString()} km²</h2>
      <h2>Population: {country.population.toLocaleString()}</h2>
      <h2>Continent: {country.continents.join(", ")}</h2>
    </div>
  )
}