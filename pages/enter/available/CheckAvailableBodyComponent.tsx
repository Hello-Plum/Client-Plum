import React from 'react'
import styled from 'styled-components'
import { AvailableTimeInfo } from '../../../types/enter/checkMeetingInterface'
import SetName from './components/SetName'

interface CheckAvailableBodyProps {
  currentStep: string
  availableTimeInfo: AvailableTimeInfo
  setAvailableTimeInfo: (input: Partial<AvailableTimeInfo>) => void
}

const BodyTypes: { [key: string]: React.JSXElementConstructor<any> } = {
  'name': SetName
  //'availableDates'
  //'priority',
  //'end'
}

export default function CheckAvailableBodyComponent({ currentStep, availableTimeInfo, setAvailableTimeInfo }: CheckAvailableBodyProps) {
  const CurrentBodyComponent = BodyTypes[currentStep]

  return (
    <Styled.BodyWrapper>
      <CurrentBodyComponent
        availableTimeInfo={availableTimeInfo}
        setAvailableTimeInfo={setAvailableTimeInfo}
      />
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