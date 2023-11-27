import React from 'react'
import styled from "styled-components"
import { StepProps } from '../../../../types/enter/checkMeetingInterface'


export default function SetName({ meetingDetail, availableTimeInfo, setAvailableTimeInfo }: StepProps) {
  return (
    <Styled.Input 
      id="name" 
      type="text" 
      value={availableTimeInfo.name}
      onChange={(e) => { setAvailableTimeInfo({ name: e.target.value }) }}
    />
  )
}

const Styled = {
  Input : styled.input`
    display: flex;
    width: 100%;
    height: 4.2rem;
    border: 0.1rem solid #8e8e8e;
    border-radius: 1.5rem;

    font-size: 1.3rem;
    padding: 1rem;
    line-height: 3rem;
    color: #444;
    resize: none;
  `,
}