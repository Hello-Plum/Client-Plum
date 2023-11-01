import React from 'react'
import { useRouter } from 'next/navigation'
import Greeting from '../../components/common/Greeting'
import styled from 'styled-components'
import CardComponent from '../../components/atom/CardComponent'

export default function MeetingInfo() {
  const router = useRouter()

  return (
    // button 누르면 링크 복사
    <Greeting buttons={['링크 공유하기']} onClickButton={() => {}}>
      <Styled.MeetingInfoWrapper>
        <Styled.Title>링크를 통해 초대하고 함께 일정을 정하세요!</Styled.Title>
        <CardComponent cardInfo={{name: '회의명', startDate: '2023-11-1', endDate: '2023-11-5', place: '회의 장소'}}/>
      </Styled.MeetingInfoWrapper>
    </Greeting>
  )
}

const Styled = {
  MeetingInfoWrapper : styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem 1rem; 
  `,
  Title : styled.h1`
    font-size: 1.9rem;
    font-weight: 550;
    letter-spacing: -0.03rem;
    padding: 2rem 0px 4rem;
  `,

}