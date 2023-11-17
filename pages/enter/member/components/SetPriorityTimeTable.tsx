import React from 'react'
import styled from "styled-components"
import TimeTable from '../../../../components/modules/TimeTable'

export default function SetPriorityTimeTable() {

  return (
    <Styled.PriorityTimeWrapper>
      <TimeTable/>
    </Styled.PriorityTimeWrapper>
  )
}

const Styled = {
  PriorityTimeWrapper: styled.div`

  `,

}