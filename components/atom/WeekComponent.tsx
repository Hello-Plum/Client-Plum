import React from 'react'
import { styled } from 'styled-components'
import { weekList } from '../../data/available/checkAvailableTimeTableData'

export default function WeekComponent() {
  return (
    <Styled.WeekContainer>
        {weekList.map((day, i) => {
          return <Styled.Day key={i}>{day}</Styled.Day>
        })}
      </Styled.WeekContainer>
  )
}

const Styled = {
  WeekContainer: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin: 0px 0.5rem 0px 3.2rem;
  `,
  Day: styled.div`
    text-align: center;
    font-size: 1.4rem;
    font-weight: bold;
    letter-spacing: -0.03rem; 
  `,
}