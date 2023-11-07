import React from 'react'
import Greeting from '../../components/common/Greeting'
import styled from 'styled-components'
import CardComponent from '../../components/atom/CardComponent'
import { useMeetingDetail } from '../../hooks/meetingDetail/useMeetingDetail'
import { useRouter } from 'next/router'

export default function MeetingDetail() {
  const router = useRouter()
  const { meetingId } = router.query
  const { isLoading, detail } = useMeetingDetail(meetingId)
  
  if (!isLoading) {
    return (
      // button 누르면 링크 복사
      <Greeting buttons={['링크 공유하기']} onClickButton={() => {}}>
        <Styled.MeetingInfoWrapper>
          <Styled.Title>링크를 통해 초대하고 함께 일정을 정하세요!</Styled.Title>
          <CardComponent
            cardInfo={{ name: detail?.name, startDate: detail?.startDate, endDate: detail?.endDate, place: detail?.place }}
          />
        </Styled.MeetingInfoWrapper>
      </Greeting>
    )
  }
  <Greeting buttons={['링크 공유하기']} onClickButton={() => {}}>
    <Styled.MeetingInfoWrapper>
      <Styled.Title>Loading...</Styled.Title>
    </Styled.MeetingInfoWrapper>
  </Greeting>
}

const Styled = {
  MeetingInfoWrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem 1rem;
  `,
  Title: styled.h1`
    font-size: 1.9rem;
    font-weight: 550;
    letter-spacing: -0.03rem;
    padding: 2rem 0px 4rem;
  `,
}
