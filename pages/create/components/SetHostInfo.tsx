import React from 'react'
import styled from 'styled-components'
import { StepProps } from '../../../types/create/createMeetingInterface'

export default function SetHostInfo({ meetingInfo, setMeetingInfo}: StepProps) {
  return (
    <Styled.Form>
      <Styled.HostInfoSection>
        <Styled.Label>방장 이름</Styled.Label>
        <Styled.Input
          id='hostname'
          type='text'
          placeholder='방장 이름'
          value={meetingInfo.host}
          onChange={(e) => {
            setMeetingInfo({ host: e.target.value })
          }}
        />
      </Styled.HostInfoSection>
      <Styled.HostInfoSection>
        <Styled.Label>방 비밀번호</Styled.Label>
        <Styled.Input
          id='hostpassword'
          type='text'
          placeholder='방 비밀번호'
          value={meetingInfo.password}
          onChange={(e) => {
            setMeetingInfo({ password: e.target.value })
          }}
        />
      </Styled.HostInfoSection>
    </Styled.Form>
  )
}

const Styled = {
  Form: styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-width: 31.3rem;
    gap: 3.4rem;
  `,
  HostInfoSection: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `,
  Label: styled.p`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #444;
    font-size: 1.4rem;
    font-weight: 600;
  `,
  Input: styled.input`
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
