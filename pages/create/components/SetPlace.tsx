import React from 'react'
import styled from 'styled-components'
import { placeType } from '../../../data/create/createMeetingData'
import { MeetingInfo } from '../../../types/create/createMeetingInterface'

export default function SetPlace() {
  return (
    <Styled.PlaceWrapper>
      {placeType.map((type, i) => {
        return (
          <Styled.Button key={i+type}>
            {type === 'ONLINE' ? '온라인' : type === 'OFFLINE' ? '오프라인' : '미정'}
          </Styled.Button>
        )
      })}

    </Styled.PlaceWrapper>
  )
}

const Styled = {
  PlaceWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
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