import React from 'react'
import styled from 'styled-components'

interface StringButtonProps {
  key?: string | null
  isActivated: boolean
  buttonName: string
  handleClick?: (e: any) => void
}

export default function StringButtonComponent(props: StringButtonProps) {
  const { key, isActivated, buttonName, handleClick } = props
  return (
    <Styled.Button
      key={key}
      isActivated={isActivated}
      onClick={handleClick}
    >
      {buttonName}
    </Styled.Button>
  )
}

const Styled = {
  Button: styled.button<{ isActivated: boolean }>`
    width: 100%;
    padding: 1.5rem;
    border-radius: 0.6rem;
    background: ${({ isActivated }) => (isActivated ? 'black' : 'gray')};

    text-align: center;
    color: white;
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: 0.052rem;
    cursor: pointer;
  `,
}