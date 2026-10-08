export interface Country {
  name: string;
  flag: string;
}

interface ApiCountry {
  names: { common: string };
  codes: { alpha_2: string };
  flag: { url_png: string };
}

interface ApiResponse {
  data: { objects: ApiCountry[] };
}

const API_URL= "https://api.restcountries.com/countries/v5"
const API_KEY= import.meta.env.VITE_RC_API_KEY as string

export const MIDDLE_EAST_CODES = [
  "BH", "EG", "IQ", "IR", "IL", "KW", "LB", "QA", "OM", "SA", "SY", "TR", "AE",
]

async function fetchPage(offset: number, signal?: AbortSignal): Promise<ApiCountry[]> {
  const params = new URLSearchParams({
    limit: "100",
    offset: String(offset),
    response_fields: "names.common,codes.alpha_2,flag.url_png",
  })

  const res = await fetch(`${API_URL}?${params}`, {
    headers: { Authorization: `Bearer ${API_KEY}` },
    signal,
  })

  if (!res.ok) {
    throw new Error(`La API respondió con error ${res.status}`)
  }

  const json: ApiResponse = await res.json()
  return json.data.objects
}

export async function fetchMiddleEast(signal?: AbortSignal): Promise<Country[]> {
  if (!API_KEY) {
    throw new Error("Falta VITE_RC_API_KEY en .env.local")
  }

  const pages = await Promise.all(
    [0, 100, 200].map(offset => fetchPage(offset, signal))
  )

  return pages
    .flat()
    .filter(c => MIDDLE_EAST_CODES.includes(c.codes.alpha_2))
    .map(c => ({ name: c.names.common, flag: c.flag.url_png }))
}