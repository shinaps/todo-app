import React, { InputHTMLAttributes } from 'react'

type BaseInputProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string
  label?: string
}

export const BaseInput: React.FC<BaseInputProps> = ({
  id,
  label,
  ...props
}: BaseInputProps) => {
  return (
    <div className={`flex flex-col gap-4`}>
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
        border-b 
        border-gray 
        border-solid 
        px-2
        py-4
        `}
        {...props}
      />
    </div>
  )
}
