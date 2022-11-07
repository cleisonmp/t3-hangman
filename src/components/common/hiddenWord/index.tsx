import classNames from 'classnames'

interface HiddenWordProps {
  guessedLetters: string[]
  wordToGuess: string
  isLoser: boolean
  isWinner: boolean
}
export const HiddenWord = ({
  guessedLetters,
  wordToGuess,
  isLoser,
  isWinner,
}: HiddenWordProps) => {
  return (
    <div className='flex gap-2 font-mono text-7xl font-bold uppercase'>
      {wordToGuess.split('').map((letter, index) => {
        const isVisible = guessedLetters.includes(letter) || isLoser
        return (
          <span className='border-b-4 border-app-border' key={index}>
            <span
              className={classNames(
                { 'visible': isVisible },
                { 'invisible': !isVisible },
                { 'text-app-text': !isLoser && !isWinner }, //default
                { 'text-app-error': isLoser },
                { 'text-app-primary': isWinner },
              )}
            >
              {letter}
            </span>
          </span>
        )
      })}
    </div>
  )
}
