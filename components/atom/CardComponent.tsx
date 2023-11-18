import React from 'react'
import styled from 'styled-components'
import { Detail } from '../../types/cardInfo/showInfoInterface'

interface CardProps {
  cardInfo: Partial<Detail>
}

export default function CardComponent(props: CardProps) {
  const { cardInfo } = props
  return (
    <Styled.CardWrapper>
      <Styled.Title>{cardInfo.name}</Styled.Title>
      <Styled.ListWrapper>
        <Styled.List>{`${cardInfo.startDate} ~ ${cardInfo.endDate}`}</Styled.List>
        <Styled.List>{cardInfo.place}</Styled.List>
      </Styled.ListWrapper>
    </Styled.CardWrapper>
  )
}

const Styled = {
  CardWrapper : styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 3rem;

    width: 100%;
    height: 100%;
    background-color: rgb(244, 248, 255);
  `,
  Title : styled.h1`
    font-size: 1.9rem;
    font-weight: 550;
    letter-spacing: -0.03rem;
  `,
  ListWrapper : styled.ul`
    padding: 0px;
  `,
  List : styled.li`
    color: black;  
    font-size: 1.5rem;
    letter-spacing: -0.03rem;
    padding: 1.5rem 1rem 0px;
    list-style: inside;
  `,
}