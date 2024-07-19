import { PropsWithChildren } from 'react'

export type ButtonElementProps = Modify<
  React.HTMLProps<HTMLButtonElement>,
  {
    type?: 'button' | 'submit' | 'reset' | undefined
    loading?: boolean
    fullWidth?: boolean
    className?: string
    icon?: React.ReactNode
    iconPosition?: 'start' | 'end'
  }
>

export interface ButtonProps extends ButtonElementProps, PropsWithChildren {}
