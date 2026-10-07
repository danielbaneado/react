interface ControlsProps {
  onNext: () => void;
  onRestart: () => void;
  disabled: boolean;
}

export default function Controls({ onNext, onRestart, disabled }: ControlsProps) {
  return (
    <>
      <button type="button" className="counter" onClick={onNext} disabled={disabled}>
        Show random country
      </button>
      <button type="button" className="counter" onClick={onRestart}>Restart</button>
    </>
  )
}