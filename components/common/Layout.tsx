import React from 'react'
import styled from 'styled-components'
import { IoIosArrowBack } from 'react-icons/io'
import { GiHamburgerMenu } from 'react-icons/gi'

interface LayoutProps {
  children: React.ReactNode
  buttons?: string[]
  isButtonActivated: boolean
  header: string
  link?: string
  onClickBackButton?: () => void
  onClickButton?: () => void
  onClickButtonLeft?: () => void
}

export default function Layout(props: LayoutProps) {
  const { children, buttons, isButtonActivated, header, link, onClickBackButton, onClickButton, onClickButtonLeft } = props

  return (
    <Styled.Root>
      <Styled.Header>
        <Styled.Button onClick={onClickBackButton}>
          <IoIosArrowBack size={28} />
        </Styled.Button>
        <Styled.Title>{header}</Styled.Title>
        <Styled.Button>
          <GiHamburgerMenu size={25} />
        </Styled.Button>
      </Styled.Header>

      <Styled.Main>{children}</Styled.Main>

      <Styled.Footer isButtons={buttons?.length === 2}>
        {buttons && buttons?.length == 2 && (
          <Styled.StrButtonLeft onClick={onClickButtonLeft}>
            {buttons[1]}
          </Styled.StrButtonLeft>
        )}
        {buttons && buttons?.length >= 1 && (
          <Styled.StrButton isActivated={isButtonActivated} onClick={onClickButton}>
            {buttons[0]}
          </Styled.StrButton>
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
    height: 100%;

    overflow-y: scroll;
    overflow-x: hidden;
  `,
  Header: styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 5.4rem 0px 4.6rem;
    width: 100%;
  `,
  Title: styled.h1`
    text-align: center;
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: -0.03rem;
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
    
    height: 100%;
    width: 100%;
  `,
  Footer: styled.footer<{ isButtons: boolean }>`
    display: flex;
    flex-direction: ${({ isButtons }) => (isButtons? 'row' : 'column')};
    justify-content: space-between;
    align-items: center;
    min-width: 32rem;
    margin-bottom: 1.2rem;

    position: fixed;
    bottom: 0;
  `,
  StrButton: styled.button<{ isActivated: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    padding: 1.3rem;
    border-radius: 0.6rem;
    background: ${({ isActivated }) => (isActivated? 'black' : 'gray')};

    text-align: center;
    color: ${({ isActivated }) => (isActivated? 'white' : 'black')};
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: 0.052rem;
    cursor: pointer;
    pointer-events: ${({ isActivated }) => (isActivated? 'auto' : 'none')};
  `,
  StrButtonLeft: styled.button`
    width: 100%;
    padding: 1rem;
    border-radius: 0.6rem;
    background: black;
    
    background: rgba(218, 218, 218, 1);
    margin-right: 0.9rem;
    
    text-align: center;
    color: black;
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: 0.052rem;
    cursor: pointer;
  `,
  Link: styled.a``,
}
