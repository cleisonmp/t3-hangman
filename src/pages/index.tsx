import { type NextPage } from 'next'
import { useCallback, useEffect, useState } from 'react'
import { Hangman } from '../components/common/hangman'
import { HiddenWord } from '../components/common/hiddenWord'
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
      <main className='mx-auto flex w-full max-w-4xl flex-1 flex-col items-center gap-4 p-4'>
        <h1 className=''>T3 app</h1>
        <p>{wordToGuess}</p>
        <div className='text-2xl'>
          {isWinner && 'Winner! - Refresh to try again'}
          {isLoser && 'Nice Try - Refresh to try again'}
        </div>
        <Hangman numberOfGuesses={incorrectGuesses.length} />
        <HiddenWord
          wordToGuess={wordToGuess}
          guessedLetters={correctGuesses}
          reveal={isLoser}
        />
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
