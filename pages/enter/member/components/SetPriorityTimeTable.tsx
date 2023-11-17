import React from 'react'
import styled from "styled-components"
import TimeTable from '../../../../components/modules/TimeTable'
import { AvailableTimeInfo, StepProps } from '../../../../types/enter/checkMeetingInterface'

export default function SetPriorityTimeTable({ meetingDetail, availableTimeInfo, setAvailableTimeInfo }: StepProps) {
  return (
    <Styled.PriorityTimeWrapper>
      <TimeTable 
        meetingDetail={meetingDetail}
        availableTimeInfo={availableTimeInfo}
      />
    </Styled.PriorityTimeWrapper>
  )
}

const Styled = {
  PriorityTimeWrapper: styled.div`

  `,

}