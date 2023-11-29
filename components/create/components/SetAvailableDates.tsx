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

  const handleAvailableDates = (e: any) => { /* e type 찾아보기 */
    const startDateFormat = moment(e[0]).format('YYYY-MM-DD')
    const endDateFormat = moment(e[1]).format('YYYY-MM-DD')
    if (e[1].getDate() - e[0].getDate() > 6) {
      setMeetingInfo({ startDate: '', endDate: '' })
      alert('회의 날짜는 최대 7일까지 정할 수 있어요!')
    } else {
      setMeetingInfo({ startDate: startDateFormat, endDate: endDateFormat })
    }
  }

  return (
    mounted &&
    <>
    <Styled.InputWrapper>
      <Styled.Input 
        type="text"
        placeholder='원하는 기간을 선택해주세요'
        value={meetingInfo.startDate || ''}
        disabled
      />
      <Styled.Input 
        type="text"
        placeholder='원하는 기간을 선택해주세요'
        value={meetingInfo.endDate || ''}
        disabled
      />
    </Styled.InputWrapper>
      <Calendar
        onChange={handleAvailableDates}
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
