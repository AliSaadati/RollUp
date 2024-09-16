import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {
  variant?: 'primary' | 'secondary';
}

const Button = ({variant, ...props} : ButtonProps) => {
  const ColorClass = variant == 'primary' ? 'blue' : 'red';
    return (
      <button style={{color: ColorClass}} {...props}>{props.children}</button>
    )
  
}

export default Button;
