import React from 'react'
import styled from "styled-components"
import TitleComponent from '../../../../components/modules/TitleComponent'
import TimeTable from '../../../../components/modules/TimeTable'
import { AvailableTimeInfo } from '../../../../types/enter/checkMeetingInterface'

export default function SetEntireAvailableTimeTable() {
  return(
    <Styled.EntireAvailableWrapper>
      <TitleComponent title={'현재까지 12명이 입력했어요.'} subTitle={'홍희수, 김민지'}/>
      {/*
      <TimeTable 
        meetingDetail={undefined} 
        availableTimeInfo={undefined} 
        setAvailableTimeInfo={function (input: Partial<AvailableTimeInfo>): void {
        throw new Error('Function not implemented.')
      } }/>
      */}
    </Styled.EntireAvailableWrapper>
  )
}

const Styled = {
  EntireAvailableWrapper: styled.div`

  `,

}