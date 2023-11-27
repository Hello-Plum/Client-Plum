import React from 'react'
import styled from 'styled-components'

interface InputProps {
  id: string
  type: string
  placeholder: string
  value?: string
  onChangeInput?: (e: any) => void
}

export default function InputComponent(props: InputProps) {
  const { id, type, placeholder, value, onChangeInput } = props
  return (
    <Styled.Input 
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChangeInput}  
    />
  )
}

const Styled = {
  Input : styled.input`
    display: flex;
    width: 100%;
    height: 4.2rem;
    border: 0.1rem solid #8e8e8e;
    border-radius: 1.5rem;

    font-size: 1.3rem;
    padding: 1rem;
    line-height: 3rem;
    color: #444;
    resize: none;
  `,
}