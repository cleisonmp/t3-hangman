import classNames from 'classnames'

const KEYS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]

type KeyboardProps = {
  disabled?: boolean
  correctGuesses: string[]
  incorrectGuesses: string[]
  addGuessedLetter: (letter: string) => void
}

export function Keyboard({
  correctGuesses,
  incorrectGuesses,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) {
  const handleLetterClick = (letter: string) => {
    addGuessedLetter(letter)
  }

  return (
    <div className='grid w-full grid-cols-fit56 gap-2'>
      {KEYS.map((key) => {
        const isCorrectGuess = correctGuesses.includes(key)
        const isIncorrectGuess = incorrectGuesses.includes(key)
        const isDisabled = isIncorrectGuess || isCorrectGuess || disabled
        const letterBg = isCorrectGuess
          ? 'bg-app-primary '
          : isIncorrectGuess
          ? 'bg-app-error '
          : 'bg-transparent'

        return (
          <button
            onClick={() => handleLetterClick(key)}
            className={`w-full select-none border-2 border-app-border p-2 text-4xl font-bold uppercase transition-all 
            ${classNames(
              { 'hover:text-app-info hover:brightness-125': !isDisabled },
              { 'text-app-secondary': !isIncorrectGuess && !isCorrectGuess }, //default
              letterBg,
              { 'text-app-textDisabled': isDisabled },
            )}`}
            disabled={isDisabled}
            key={key}
          >
            {key}
          </button>
        )
      })}
    </div>
  )
}
