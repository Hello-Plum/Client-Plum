import React from 'react'
import styled from 'styled-components'
import { durationType } from '../../../data/create/createMeetingData'

export default function SetDuration() {
  return (
    <Styled.DurationWrapper>
      {durationType.map((duration, i) => {
        return <Styled.Button key={i + duration.enum}>{duration.time}</Styled.Button>
      })}
    </Styled.DurationWrapper>
  )
}

const Styled = {
  DurationWrapper: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.1rem;
  `,
  Button: styled.button`
    width: 100%;
    padding: 1.5rem;
    border-radius: 0.6rem;
    background: black;

    text-align: center;
    color: white;
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: 0.052rem;
    cursor: pointer;
  `,
}
