import React from 'react'

import { ButtonProps } from './interface'

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button className={className} disabled={true}>
      {children}
    </button>
  )
}

export default Button
