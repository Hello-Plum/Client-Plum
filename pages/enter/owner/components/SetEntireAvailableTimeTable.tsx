import React from 'react'
import styled from "styled-components"
import TitleComponent from '../../../../components/modules/TitleComponent'
import { AvailableTimeInfo } from '../../../../types/enter/checkMeetingInterface'
import TimeTable from './TimeTable'
import WeekComponent from '../../../../components/atom/WeekComponent'
import TimeComponent from '../../../../components/atom/TimeComponent'
import { useRouter } from 'next/router'
import { useEntireTimeTable } from '../../../../hooks/owner/useEntireTimeTable'

export default function SetEntireAvailableTimeTable() {
  const router = useRouter()
  const { meetingId } = router.query
  const { members, contents } = useEntireTimeTable(meetingId)

  return(
    <Styled.EntireAvailableWrapper>
      <TitleComponent title={`현재까지 ${members.length}명이 입력했어요.`} subTitle={members.join(', ')}/>
      <Styled.PriorityTimeWrapper>
      <WeekComponent />
      <Styled.TimeTableWrapper>
        <TimeComponent />
        <TimeTable/>
      </Styled.TimeTableWrapper>
    </Styled.PriorityTimeWrapper>
    </Styled.EntireAvailableWrapper>
  )
}

const Styled = {
  EntireAvailableWrapper: styled.div`

  `,
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