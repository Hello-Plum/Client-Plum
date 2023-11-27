import React from 'react'
import styled from 'styled-components'
import { IoIosArrowBack } from 'react-icons/io'
import { GiHamburgerMenu } from 'react-icons/gi'

interface TabLayoutProps {
  children: React.ReactNode
  header: string
  onClickBackButton?: () => void
}

export default function TabLayout(props: TabLayoutProps) {
  const { children, header, onClickBackButton } = props

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
}
