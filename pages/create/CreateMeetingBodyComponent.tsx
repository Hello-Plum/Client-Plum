import React from 'react'
import styled from 'styled-components'
import SetTitle from './components/SetTitle'
import SetAvailableDates from './components/SetAvailableDates'

export default function CreateMeetingBodyComponent() {
  return (
    <Styled.BodyWrapper>
      {/*<SetTitle />*/}
      <SetAvailableDates />
    </Styled.BodyWrapper>
  )
}

const Styled = {
  BodyWrapper: styled.div``,
}