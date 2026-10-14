interface ControlsProps {
  onNext: () => void;
  onRestart: () => void;
  onContinentChange: (value: string) => void;
  disabled: boolean;
  continent: string;
}

export default function Controls({ onNext, onRestart, onContinentChange, disabled, continent }: ControlsProps) {
  const continents = ['Africa', 'Antarctica', 'Asia', 'Europe', 'North America', 'Oceania', 'South America'];

  return (
    <>
      <select
        className="counter"
        value={continent} 
        onChange={(e) => onContinentChange(e.target.value)} 
      >
        <option value="">Todos los continentes</option>
        {continents.map(c => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <button type="button" className="counter" onClick={onNext} disabled={disabled}>
        Show random country
      </button>
      <button type="button" className="counter" onClick={onRestart}>Restart</button>
    </>
  )
}