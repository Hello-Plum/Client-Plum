import React from 'react'
import { StepProps } from '../../../types/create/createMeetingInterface'
import InputComponent from '../../atom/InputComponenet'

export default function SetTitle({ meetingInfo, setMeetingInfo }: StepProps) {
  return (
    <InputComponent 
      id={'title'} 
      type={'text'} 
      placeholder={'회의 이름'} 
      value={meetingInfo.name} 
      onChangeInput={(e) => { 
        setMeetingInfo({ name: e.target.value }) 
      }}
    /> 
  )
}