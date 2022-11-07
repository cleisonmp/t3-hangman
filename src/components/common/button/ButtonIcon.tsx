import type { MouseEvent } from 'react'
import { type IconType } from 'react-icons'

interface ButtonIconProps {
  label: string
  Icon: IconType
  handleClick?: (event?: MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
}

export const ButtonIcon = ({
  label,
  Icon,
  handleClick,
  disabled = false,
}: ButtonIconProps) => {
  const runClickEvent = (e: MouseEvent<HTMLButtonElement>) => {
    if (handleClick) {
      handleClick(e)
    }
  }

  return (
    <button
      className='group relative flex h-12 select-none items-center justify-center overflow-hidden rounded-lg bg-app-primary pl-4 pr-10 text-lg font-bold text-app-text disabled:pointer-events-none disabled:bg-app-backgroundDisabled'
      onClick={runClickEvent}
      disabled={disabled}
    >
      <div className='absolute inset-0 w-0 bg-app-success transition-all duration-[250ms] ease-out group-hover:w-full'></div>
      <span className='relative text-center group-hover:text-white'>
        {label}
      </span>
      <div className='absolute right-4'>
        <Icon className='' />
      </div>
    </button>
  )
}
