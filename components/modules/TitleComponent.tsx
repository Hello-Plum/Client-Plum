'use client'
import React from 'react'
import styled from 'styled-components'

interface TitleProps {
  title: string
  subTitle: string
}

export default function TitleComponent(props: TitleProps) {
  const { title, subTitle } = props
  return (
    <Styled.TitleWrapper>
      <Styled.Title>{title}</Styled.Title>
      <Styled.SubTitle>{subTitle}</Styled.SubTitle>
    </Styled.TitleWrapper>
  )
}


const Styled = {
  TitleWrapper: styled.div`
    display: flex;
    flex-direction: column;
    padding: 4.4rem 0px 4.2rem;
    gap: 1.2rem;
    
  `,
  Title: styled.h1`
    font-size: 1.9rem;
    font-weight: 550;
    letter-spacing: -0.03rem;
  `,
  SubTitle: styled.p`
    font-size: 1.4rem;
    color: grey;
    font-weight: 400;
    letter-spacing: -0.03rem;
  `
}