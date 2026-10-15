import { useQuery } from "@tanstack/react-query"
import { fetchCountries } from "../data/countries"

export function useCountries() {
  return useQuery({
    queryKey: ["countries"],
    queryFn: ({ signal }) => fetchCountries(signal),
    staleTime: Infinity, // los países casi no cambian: no hace falta refrescarlos
  })
}