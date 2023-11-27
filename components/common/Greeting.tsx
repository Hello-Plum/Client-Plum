import React from 'react'
import styled from 'styled-components'
import { GiPeach, GiHamburgerMenu } from 'react-icons/gi'

interface GreetingProps {
  children: React.ReactNode
  buttons?: string[]
  link?: string
  onClickButton?: () => void
  onClickButtonLeft?: () => void
}

export default function Greeting(props: GreetingProps) {
  const { children, buttons, link, onClickButton, onClickButtonLeft } = props

  return (
    <Styled.Root>
      <Styled.Header>
        <Styled.Button>
          <GiPeach size={40} />
        </Styled.Button>
        <Styled.Button>
          <GiHamburgerMenu size={30} />
        </Styled.Button>
      </Styled.Header>

      <Styled.Main>{children}</Styled.Main>

      <Styled.Footer isButtons={buttons?.length === 2}>
        {buttons && buttons?.length == 2 && (
          <Styled.StrButtonLeft onClick={onClickButtonLeft}>{buttons[1]}</Styled.StrButtonLeft>
        )}
        {buttons && buttons?.length >= 1 && (
          <Styled.StrButton onClick={onClickButton}>{buttons[0]}</Styled.StrButton>
        )}
        {link && <Styled.Link>{link}</Styled.Link>}
      </Styled.Footer>
    </Styled.Root>
  )
}

const Styled = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height: 100vh;

    overflow-y: scroll;
    overflow-x: hidden;
  `,
  Header: styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    margin-top: 1.4rem;
  `,
  Button: styled.button`
    background: inherit;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    overflow: visible;
    cursor: pointer;
  `,
  Main: styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  `,
  Footer: styled.footer<{ isButtons: boolean }>`
    display: flex;
    flex-direction: ${({ isButtons }) => (isButtons? 'row' : 'column')};
    justify-content: space-between;
    align-items: center;
    min-width: 32rem;
    margin-bottom: 1.2rem;
  `,
  StrButton: styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    padding: 1rem;
    border: 2px solid #3182F6;
    border-radius: 1.5rem;
    background: #3182F6;

    text-align: center;
    color: white;
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: 0.052rem;
    cursor: pointer;
  `,
  StrButtonLeft: styled.button`
    width: 100%;
    padding: 1rem;
    border: none;
    border-radius: 1.5rem;
    background: #F2F4F6;
    
    margin-right: 0.9rem;
    text-align: center;
    color: #4E5867;
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: 0.052rem;
    cursor: pointer;
  `,
  Link: styled.a``,
}