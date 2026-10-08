import type { Country } from "../data/countries"

interface HistoryProps {
  countries: Country[];
  title?: string;
}

export default function History({ countries, title }: HistoryProps) {
  if (countries.length === 0) return null

  return (
    <>
      {title && <h3>{title}</h3>}
      <ul>
        {countries.map(country => (
          <li key={country.name}>{country.name}</li>
        ))}
      </ul>
    </>
  )
}