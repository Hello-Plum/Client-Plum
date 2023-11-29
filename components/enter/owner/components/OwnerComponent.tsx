import React from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import SetBestMeetingTime from './SetBestMeetingTime'
import SetEntireAvailableTimeTable from './SetEntireAvailableTimeTable'
import styled from 'styled-components'

export default function OwnerComponent() {
  return (
    <Styled.TabWrapper>
      <Tabs 
        defaultActiveKey="BestMeetingTime" id="fill-tab-example" className="mb-3" fill>
        <Tab id='bestTime' eventKey="BestMeetingTime" title="최적의 회의시간">
          <SetBestMeetingTime />
        </Tab>
        <Tab id='entireTime' eventKey="EntireAvailableTimeTable" title="종합 일정 시간표">
          <SetEntireAvailableTimeTable />
        </Tab>
      </Tabs>
    </Styled.TabWrapper>
  )
}

const Styled = {
  TabWrapper: styled.div`
    font-size: 1.2rem;
    line-height: 2.2rem;
    color: #444;
    resize: none;
  `,
}
