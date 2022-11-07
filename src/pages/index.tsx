import { type NextPage } from 'next'
import { useCallback, useEffect, useState } from 'react'
import { ButtonIcon } from '../components/common/button/ButtonIcon'
import { Hangman } from '../components/common/hangman'
import { HiddenWord } from '../components/common/hiddenWord'
import { Keyboard } from '../components/common/keyboard'
import type { ListBoxOption } from '../components/common/listBox/ListBox'
import { ListBox } from '../components/common/listBox/ListBox'
import { Seo } from '../components/utils/Seo'
import type { WordsLibrary } from '../lib/words'
import { getNewWord } from '../lib/words'
import { FiRefreshCcw } from 'react-icons/fi'
import { FaUnlockAlt } from 'react-icons/fa'

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
  const [revealWord, setRevealWord] = useState(false)
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
  const isLoser = incorrectGuesses.length >= 6 || revealWord
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
    setRevealWord(false)
    setGuessedLetters([])
    setWordToGuess(
      getNewWord(selectedLanguage?.id as WordsLibrary, wordToGuess),
    )
  }

  const handleRevealWord = () => {
    setRevealWord(true)
  }

  //get first word on render
  useEffect(() => {
    requestNewWord()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLanguage])

  return (
    <>
      <Seo />
      <main className='mx-auto flex w-full max-w-4xl flex-1 flex-col items-center gap-8 p-4'>
        <h1 className=''>The Hangman Game</h1>
        <div className='relative flex items-center gap-2'>
          <label>Words library:</label>
          <ListBox
            options={languageOptions}
            selected={selectedLanguage}
            setSelected={setSelectedLanguage}
          />
        </div>
        <div className='flex justify-between gap-4'>
          <ButtonIcon
            label='New Word'
            Icon={FiRefreshCcw}
            handleClick={requestNewWord}
          />
          <ButtonIcon
            label='Reveal'
            Icon={FaUnlockAlt}
            handleClick={handleRevealWord}
            disabled={isLoser || isWinner}
          />
        </div>
        <Hangman numberOfGuesses={incorrectGuesses.length} />
        <HiddenWord
          wordToGuess={wordToGuess}
          guessedLetters={correctGuesses}
          isLoser={isLoser}
          isWinner={isWinner}
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
