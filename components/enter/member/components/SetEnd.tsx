import React from 'react'
import styled from 'styled-components'


export default function SetEnd() {

  return (
    <Styled.MeetingInfoWrapper>
    </Styled.MeetingInfoWrapper>
  )
}

const Styled = {
  MeetingInfoWrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem 1rem;
  `,
  Title: styled.h1`
    font-size: 1.9rem;
    font-weight: 550;
    letter-spacing: -0.03rem;
    padding: 2rem 0px 4rem;
  `,
}