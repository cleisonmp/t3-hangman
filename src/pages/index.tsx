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
import { GiSpyglass } from 'react-icons/gi'
import { trpc } from '../utils/trpc'

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
  const [showDefinition, setShowDefinition] = useState(false)
  const [wordToGuess, setWordToGuess] = useState('')
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]!)
  const { data, isLoading } = trpc.define.getDefinition.useQuery(
    { language: selectedLanguage.id as WordsLibrary, word: wordToGuess },
    {
      refetchInterval: 1000 * 60 * 15, //15mins
      refetchOnWindowFocus: false,
    },
  )

  const correctGuesses = guessedLetters.filter((letter) =>
    wordToGuess.includes(letter),
  )
  const incorrectGuesses = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter),
  )
  const totalOfIncorrectGuesses = incorrectGuesses.length
  const isLoser = totalOfIncorrectGuesses >= 6 || revealWord
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
    setShowDefinition(false)
    setGuessedLetters([])
    setWordToGuess(
      getNewWord(selectedLanguage?.id as WordsLibrary, wordToGuess),
    )
  }

  const handleRevealWord = () => {
    setRevealWord(true)
  }
  const handleShowDefinition = () => {
    setShowDefinition(true)
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
            label='Help'
            Icon={GiSpyglass}
            handleClick={handleShowDefinition}
            disabled={
              isLoser || isWinner || isLoading || totalOfIncorrectGuesses < 4
            }
          />
          <ButtonIcon
            label='Reveal'
            isRed
            Icon={FaUnlockAlt}
            handleClick={handleRevealWord}
            disabled={isLoser || isWinner}
          />
        </div>
        <div
          className={`flex gap-1 ${showDefinition ? 'visible' : 'invisible'}`}
        >
          <span className='font-bold text-app-primary'>Definition:</span>
          <span className=''>{data?.definition}</span>
        </div>
        <Hangman numberOfGuesses={totalOfIncorrectGuesses} />
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
