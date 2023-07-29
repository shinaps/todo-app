import React, { ButtonHTMLAttributes } from 'react'

type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
}

export const BaseButton: React.FC<BaseButtonProps> = ({
  children,
  ...props
}) => (
  <button className={`border-0 text-white rounded-md h-10 bg-blue`} {...props}>
    {children}
  </button>
)
