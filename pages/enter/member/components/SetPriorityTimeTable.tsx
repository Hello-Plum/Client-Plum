import React from 'react'
import styled from "styled-components"
import TimeTable from '../../../../components/modules/TimeTable'
import { AvailableTimeInfo, StepProps } from '../../../../types/enter/checkMeetingInterface'
import WeekComponent from '../../../../components/atom/WeekComponent'
import TimeComponent from '../../../../components/atom/TimeComponent'

export default function SetPriorityTimeTable({ meetingDetail, availableTimeInfo, setAvailableTimeInfo }: StepProps) {
  return (
    <Styled.PriorityTimeWrapper>
      <WeekComponent />
      <Styled.TimeTableWrapper>
        <TimeComponent />
        <TimeTable 
          meetingDetail={meetingDetail}
          availableTimeInfo={availableTimeInfo}
        />
      </Styled.TimeTableWrapper>
    </Styled.PriorityTimeWrapper>
  )
}

const Styled = {
  PriorityTimeWrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin: -1rem 0px 6rem 0px;
  `,
  TimeTableWrapper: styled.div`
    display: flex;
    flex-direction: row;
  `,

}