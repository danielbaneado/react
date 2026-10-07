import KSA from "../assets/KSA.svg"
import Bahrain from "../assets/Bahrain.png"
import Egypt from "../assets/Egypt.png"
import Iraq from "../assets/Iraq.webp"
import Israel from "../assets/Israel.png"
import Iran from "../assets/Iran.webp"
import Kuwait from "../assets/Kuwait.webp"
import Lebanon from "../assets/Lebanon.webp"
import Qatar from "../assets/Qatar.webp"
import Oman from "../assets/Oman.png"
import Syria from "../assets/Syria.webp"
import Turkey from "../assets/Turkiye.webp"
import UAE from "../assets/UAE.webp"

export const middleEast= {
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
export type Country = keyof typeof middleEast
export const countryNames= Object.keys(middleEast) as Country[]