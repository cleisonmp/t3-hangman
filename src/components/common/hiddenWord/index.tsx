import classNames from 'classnames'

interface HiddenWordProps {
  guessedLetters: string[]
  wordToGuess: string
  reveal?: boolean
}
export const HiddenWord = ({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HiddenWordProps) => {
  return (
    <div className='flex gap-2 font-mono text-7xl font-bold uppercase'>
      {wordToGuess.split('').map((letter, index) => {
        const isVisible = guessedLetters.includes(letter) || reveal
        return (
          <span className='border-b-4 border-app-border' key={index}>
            <span
              className={classNames(
                { 'visible': isVisible },
                { 'invisible': !isVisible },
                { 'text-app-text': !reveal },
                { 'text-app-error': reveal },
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
