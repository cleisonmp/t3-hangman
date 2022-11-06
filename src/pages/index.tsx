import { type NextPage } from 'next'
import { useCallback, useEffect, useState } from 'react'
import { Keyboard } from '../components/common/keyboard'
import { Seo } from '../components/utils/Seo'
import type { WordsLibrary } from '../lib/words'
import { getNewWord } from '../lib/words'

const Home: NextPage = () => {
  const [language, setLanguage] = useState<WordsLibrary>('EN')
  const [wordToGuess, setWordToGuess] = useState('')
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const correctGuesses = guessedLetters.filter((letter) =>
    wordToGuess.includes(letter),
  )
  const incorrectGuesses = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter),
  )
  const isLoser = incorrectGuesses.length >= 6
  const isWinner = wordToGuess
    .split('')
    .every((letter) => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return

      setGuessedLetters((currentLetters) => [...currentLetters, letter])
    },
    [guessedLetters, isWinner, isLoser],
  )

  //get first word on render
  useEffect(() => {
    setWordToGuess(getNewWord(language))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Seo />
      <main className='flex w-full flex-1 flex-col gap-4 p-4'>
        <h1 className=''>T3 app</h1>
        <p>{wordToGuess}</p>
        <div className='text-2xl'>
          {isWinner && 'Winner! - Refresh to try again'}
          {isLoser && 'Nice Try - Refresh to try again'}
        </div>
        <Keyboard
          disabled={isWinner || isLoser}
          correctGuesses={correctGuesses}
          incorrectGuesses={incorrectGuesses}
          addGuessedLetter={addGuessedLetter}
        />
      </main>
    </>
  )
}

export default Home
