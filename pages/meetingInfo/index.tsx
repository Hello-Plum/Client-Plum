import React from 'react'
import { useRouter } from 'next/navigation'
import Greeting from '../../components/common/Greeting'

export default function MeetingInfo() {
  const router = useRouter()

  return (
    // button 누르면 링크 복사
    <Greeting buttons={['링크 공유하기']} onClickButton={() => {}}>
      생성한 회의 정보 카드 형식으로 보여줌!!
    </Greeting>
  )
}