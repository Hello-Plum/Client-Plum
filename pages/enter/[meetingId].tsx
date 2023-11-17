import React from 'react'
import Greeting from '../../components/common/Greeting'
import { useRouter } from 'next/router'

export default function Enter() {
  const router = useRouter()
  const { meetingId } = router.query

  return (
    <Greeting 
      buttons={['팀원 입장하기', '방장 입장하기']}
      onClickButtonLeft={() => router.push(`/enter/owner/${meetingId}`)} //'방장 입장하기'
      onClickButton={() => router.push(`/enter/member/${meetingId}`)} //'팀원 입장하기'
    >
    </Greeting>
  )
}