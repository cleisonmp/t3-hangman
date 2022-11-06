import { memo } from 'react'
import { Head } from './Head'
import { Body } from './Body'
import { LeftArm } from './LeftArm'
import { LeftLeg } from './LeftLeg'
import { RightArm } from './RightArm'
import { RightLeg } from './RightLeft'

interface HangmanProps {
  numberOfGuesses: number
}
const bodyParts = [
  memo(Head),
  memo(Body),
  memo(RightArm),
  memo(LeftArm),
  memo(RightLeg),
  memo(LeftLeg),
]

export const Hangman = ({ numberOfGuesses }: HangmanProps) => {
  return (
    <div className='relative self-start'>
      {bodyParts.map((BodyPart, index) => {
        if (index < numberOfGuesses) {
          return <BodyPart key={index} />
        }
      })}
      <div className='absolute -right-9 top-0 -z-10 h-12 w-2 bg-gray-600' />
      <div className='absolute -right-24 h-2 w-48 bg-gray-600' />
      <div className='mx-auto h-96 w-2 bg-gray-600' />
      <div className='left-0 h-2 w-48 bg-gray-600' />
    </div>
  )
}
