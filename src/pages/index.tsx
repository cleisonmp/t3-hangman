import { type NextPage } from 'next'
import { useCallback, useEffect, useState } from 'react'
import { Hangman } from '../components/common/hangman'
import { HiddenWord } from '../components/common/hiddenWord'
import { Keyboard } from '../components/common/keyboard'
import type { ListBoxOption } from '../components/common/listBox/ListBox'
import { ListBox } from '../components/common/listBox/ListBox'
import { Seo } from '../components/utils/Seo'
import type { WordsLibrary } from '../lib/words'
import { getNewWord } from '../lib/words'

const languageOptions: ListBoxOption[] = [
  {
    id: 'EN',
    name: 'English',
    unavailable: false,
  },
  {
    id: 'PT',
    name: 'Portuguese',
    unavailable: false,
  },
]

const Home: NextPage = () => {
  //const [language, setLanguage] = useState<WordsLibrary>('EN')
  const [wordToGuess, setWordToGuess] = useState('')
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]!)

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

  const requestNewWord = () => {
    setWordToGuess(
      getNewWord(selectedLanguage?.id as WordsLibrary, wordToGuess),
    )
  }

  //get first word on render
  useEffect(() => {
    requestNewWord()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLanguage])

  return (
    <>
      <Seo />
      <main className='mx-auto flex w-full max-w-4xl flex-1 flex-col items-center gap-4 p-4'>
        <h1 className=''>The Hangman Game</h1>
        <div className='relative flex items-center gap-2'>
          <label>Words library:</label>
          <ListBox
            options={languageOptions}
            selected={selectedLanguage}
            setSelected={setSelectedLanguage}
          />
        </div>
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
