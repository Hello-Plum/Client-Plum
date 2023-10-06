import React from 'react'
import styled from 'styled-components'
import { IoIosArrowBack } from 'react-icons/io'
import { GiHamburgerMenu } from 'react-icons/gi'

interface LayoutProps {
  children: React.ReactNode
  buttons?: string[]
  header: string
  link?: string
  onClickBackButton?: () => void
  onClickButton?: () => void
}

export default function Layout(props: LayoutProps) {
  const { children, buttons, header, link, onClickBackButton, onClickButton } = props

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

      <Styled.Footer>
        {buttons && <Styled.StrButton onClick={onClickButton}>{buttons[0]}</Styled.StrButton>}
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
  Footer: styled.footer`
    display: flex;
    flex-direction: row;
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
    padding: 1.3rem;
    border-radius: 0.6rem;
    background: black;

    text-align: center;
    color: white;
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: 0.052rem;
    cursor: pointer;
  `,
  Link: styled.a``,
}
