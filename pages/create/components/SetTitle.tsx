import React from 'react'
import styled from "styled-components"
import { StepProps } from '../../../types/create/createMeetingInterface'

export default function SetTitle({ meetingInfo, setMeetingInfo }: StepProps) {
  return (
    <Styled.Input 
      id="title" 
      type="text" 
      value={meetingInfo.title}
      onChange={(e) => { setMeetingInfo({ title: e.target.value }) }}
    />
  )
}

const Styled = {
  Input : styled.input`
    display: flex;
    width: 100%;
    height: 4.2rem;
    border: 0.1rem solid #8e8e8e;
    border-radius: 0.5rem;

    font-size: 1.3rem;
    padding: 1rem;
    line-height: 3rem;
    color: #444;
    resize: none;
  `,
}