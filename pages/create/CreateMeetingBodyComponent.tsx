import React from 'react'
import styled from 'styled-components'
import SetTitle from './components/SetTitle'
import SetAvailableDates from './components/SetAvailableDates'
import SetPlace from './components/SetPlace'
import SetDuration from './components/SetDuration'
import SetHostInfo from './components/SetHostInfo'
import SetAdditionalInfo from './components/SetAdditionalInfo'

export default function CreateMeetingBodyComponent() {
  return (
    <Styled.BodyWrapper>
      {/*<SetTitle />*/}
      <SetAdditionalInfo/>
    </Styled.BodyWrapper>
  )
}

const Styled = {
  BodyWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%
  `,
}