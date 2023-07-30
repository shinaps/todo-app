import { robotoMonoNormal } from '@/config/style'
import React, { InputHTMLAttributes } from 'react'

type BaseInputProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string
  label?: string
}

export const BaseInput: React.FC<BaseInputProps> = ({
  id,
  label,
  ...props
}) => {
  return (
    <div
      className={`flex flex-col gap-2 border-b-[1.5px] border-gray border-solid pb-1`}
    >
      {label && (
        <label className={'text-blue'} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className={`
        border-0 
        text-gray 
        h-10 
        bg-white 
        tracking-wide
        px-2
        pt-2
        ${robotoMonoNormal.className}
        `}
        {...props}
      />
    </div>
  )
}
