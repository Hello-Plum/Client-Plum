import React from 'react'
import styled from 'styled-components'
import SetTitle from './components/SetTitle'
import SetAvailableDates from './components/SetAvailableDates'
import SetPlace from './components/SetPlace'
import SetDuration from './components/SetDuration'
import SetHostInfo from './components/SetHostInfo'
import SetAdditionalInfo from './components/SetAdditionalInfo'
import { MeetingInfo } from '../../types/create/createMeetingInterface'

interface CreateMeetingBodyProps {
  step: string
  meetingInfo: MeetingInfo
  setMeetingInfo: (input: Partial<MeetingInfo>) => void
}

const BodyTypes: { [key: string]: React.JSXElementConstructor<any> } = {
  'title': SetTitle,
  'availableDates': SetAvailableDates,
  'place': SetPlace,
  //'duration': SetDuration,
  'hostInfo': SetHostInfo,
  'additionalInfo': SetAdditionalInfo
}

export default function CreateMeetingBodyComponent({ step, meetingInfo, setMeetingInfo }: CreateMeetingBodyProps) {
  const CurrentBodyComponent = BodyTypes[step]

  return (
    <Styled.BodyWrapper>
      <CurrentBodyComponent
        meetingInfo={meetingInfo}
        setMeetingInfo={setMeetingInfo}
      />
    </Styled.BodyWrapper>
  )
}

const Styled = {
  BodyWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem;
  `,
}