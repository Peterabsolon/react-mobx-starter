import { observer } from 'mobx-react-lite'
import NextLink, { LinkProps } from 'next/link'
import React, { HTMLAttributeAnchorTarget } from 'react'

export interface ILinkProps extends LinkProps {
  /**
   * If true, render regular anchor link instead of NextLink
   */
  external?: boolean

  /**
   * Specify anchor target for external links
   * @default '_blank'
   */
  target?: HTMLAttributeAnchorTarget

  /**
   * Contents inside the link
   */
  children?: React.ReactNode
}

export const Link = observer(({ external, children, href, target = '_blank', ...props }: ILinkProps) => {
  if (external && typeof href === 'string') {
    return (
      <a href={href} target={target}>
        {children}
      </a>
    )
  }

  return (
    <NextLink href={href} {...props}>
      {children}
    </NextLink>
  )
})
