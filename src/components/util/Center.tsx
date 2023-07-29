import React from 'react'

type CenterProps = {
  children: React.ReactNode
}

export const Center: React.FC<CenterProps> = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className={`grid h-screen items-center justify-center`}>
      {children}
    </div>
  )
}
