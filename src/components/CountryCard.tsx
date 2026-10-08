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
    </div>
  )
}