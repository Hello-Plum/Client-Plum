import React from 'react'
import styled from 'styled-components'
import { AvailableTimeInfo } from '../../../types/enter/checkMeetingInterface'
import SetName from './components/SetName'
import SetAvailableTimeTable from './components/SetAvailableTimeTable'
import SetPriorityTimeTable from './components/SetPriorityTimeTable'

interface CheckAvailableBodyProps {
  step: string
  availableTimeInfo: AvailableTimeInfo
  setAvailableTimeInfo: (input: Partial<AvailableTimeInfo>) => void
}

const BodyTypes: { [key: string]: React.JSXElementConstructor<any> } = {
  'name': SetName,
  'availableTimeTable': SetAvailableTimeTable,
  'priority': SetPriorityTimeTable,
  //'end'
}

export default function CheckAvailableBodyComponent({ step, availableTimeInfo, setAvailableTimeInfo }: CheckAvailableBodyProps) {
  const CurrentBodyComponent = BodyTypes[step]

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
    width: 100%;
    height: 100%;

    padding: 0px 1rem;
  `,
}