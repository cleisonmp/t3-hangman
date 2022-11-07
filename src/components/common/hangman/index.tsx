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
    <div className='relative mt-5 mr-16 select-none self-center sm:-mr-0 sm:self-center'>
      {bodyParts.map((BodyPart, index) => {
        if (index < numberOfGuesses) {
          return <BodyPart key={index} />
        }
      })}
      <div className='absolute -right-9 top-0 -z-10 h-8 w-2 bg-gray-600 sm:h-12' />
      <div className='absolute -right-16 h-2 w-32 bg-gray-600 sm:-right-24 sm:w-48' />
      <div className='mx-auto h-64 w-2 bg-gray-600 sm:h-96' />
      <div className='left-0 h-2 w-32 bg-gray-600 sm:w-48' />
    </div>
  )
}
