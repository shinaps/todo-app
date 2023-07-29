import React, { ButtonHTMLAttributes } from 'react'

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const BaseButton: React.FC<BaseButtonProps> = ({
  children,
  ...props
}: BaseButtonProps) => (
  <button className={`border-0 text-white rounded-md h-10 bg-blue`} {...props}>
    {children}
  </button>
)
