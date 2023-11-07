import React from 'react'
import { styled } from 'styled-components'
import SetBestMeetingTime from './components/SetBestMeetingTime'
import SetEntireAvailableTimeTable from './components/SetEntireAvailableTimeTable'

const BodyTypes: { [key: string]: React.JSXElementConstructor<any> } = {
  'best': SetBestMeetingTime,
  'entire': SetEntireAvailableTimeTable,
}

export default function ConfirmMeetingBodyComponent(type: any) {
  const CurrentBodyComponent = BodyTypes[type]
  return (
    <Styled.BodyWrapper>
      <CurrentBodyComponent />
    </Styled.BodyWrapper>
  )
}


const Styled = {
  BodyWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0px 2rem;
  `,
}