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
    border: none;
    border-radius: 1.5rem;
    background-color: ${({ isActivated }) => (isActivated ? '#3182F6' : '#F2F4F6')};

    text-align: center;
    color: ${({ isActivated }) => (isActivated ? '#F2F4F6' : '#4E5867')};
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: 0.052rem;
    cursor: pointer;
  `,
}