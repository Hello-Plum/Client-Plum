import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Calendar from 'react-calendar'
import moment from 'moment'
import { StepProps } from '../../../types/create/createMeetingInterface'

export default function SetAvailableDates({ meetingInfo, setMeetingInfo }: StepProps) {
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const changeAvailableDates = (e: any) => { /* e type 찾아보기 */
    const startDateFormat = moment(e[0]).format('YYYY년 MM월 DD일')
    const endDateFormat = moment(e[1]).format('YYYY년 MM월 DD일')
    setMeetingInfo({ availableDates: [startDateFormat, endDateFormat] })
  }

  return (
    mounted &&
    <>
    <Styled.InputWrapper>
      <Styled.Input 
        type="text"
        placeholder='원하는 기간을 선택해주세요'
        value={meetingInfo.availableDates[0] || ''}
        disabled
      />
      <Styled.Input 
        type="text"
        placeholder='원하는 기간을 선택해주세요'
        value={meetingInfo.availableDates[1] || ''}
        disabled
      />
    </Styled.InputWrapper>
      <Calendar
        onChange={changeAvailableDates}
        selectRange={true}
        formatDay={(local, date) => moment(date).format('DD')}
      />
    </>
  )
}

const Styled = {
  InputWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 0 3.2rem;
    gap: 0.9rem;
  `,
  Input: styled.input`
    display: flex;
    width: 100%;
    height: 4.2rem;
    border: 0.1rem solid #8e8e8e;
    border-radius: 0.5rem;

    font-size: 1.6rem;
    line-height: 3rem;
    color: #444;
    resize: none;
  `,
}
