import Link from 'next/link'
import React from 'react'

type BaseLinkProps = {
  href: string
  children: React.ReactNode
}

export const BaseLink: React.FC<BaseLinkProps> = ({
  href,
  children,
  ...props
}) => {
  return (
    <div className={`block w-fit`}>
      <Link href={href} {...props}>
        <span className={`text-white`}>{children}</span>
      </Link>
    </div>
  )
}
