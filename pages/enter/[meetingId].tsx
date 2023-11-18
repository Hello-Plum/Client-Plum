import React from 'react'
import Greeting from '../../components/common/Greeting'
import styled from 'styled-components'
import CardComponent from '../../components/atom/CardComponent'
import { useRouter } from 'next/router'
import { useMeetingDetail } from '../../hooks/meetingDetail/useMeetingDetail'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export default function Enter() {
  const router = useRouter()
  const { meetingId } = router.query
  const { isLoading, detail } = useMeetingDetail(meetingId)

  return (
    <Greeting 
      buttons={['팀원 입장하기', '방장 입장하기']}
      onClickButtonLeft={() => router.push(`/enter/owner/${meetingId}`)} //'방장 입장하기'
      onClickButton={() => router.push(`/enter/member/${meetingId}`)} //'팀원 입장하기'
    >
      <Styled.MeetingInfoWrapper>
        <Styled.TitleWrapper>
          <Styled.Title>초대합니다</Styled.Title> 
          <Styled.Title>가능한 시간을 등록해주세요!</Styled.Title>
        </Styled.TitleWrapper>
        {isLoading ? (
          <Styled.Loading>
            <AiOutlineLoading3Quarters size={45}/>
          </Styled.Loading>
        ) : (
          <CardComponent
            cardInfo={{
              name: detail?.name,
              startDate: detail?.startDate,
              endDate: detail?.endDate,
              place: detail?.place,
            }}
        />
        )}
      </Styled.MeetingInfoWrapper>
    </Greeting>
  )
}

const Styled = {
  MeetingInfoWrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem 1rem;
  `,
  TitleWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 0px 4rem;
  `,
  Title: styled.h1`
    font-size: 1.9rem;
    font-weight: 550;
    letter-spacing: -0.03rem;
  `,
  Loading: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
}
