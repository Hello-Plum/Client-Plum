import React from 'react'
import Greeting from '../../components/common/Greeting'
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'

export default function Enter() {
  const router = useRouter()
  const param = useParams()

  return (
    <Greeting 
      buttons={['팀원 입장하기', '방장 입장하기']}
      onClickButtonLeft={() => router.push(`/enter/confirm/${param.meetingId}`)} //'방장 입장하기'
      onClickButton={() => router.push(`/enter/available/${param.meetingId}`)} //'팀원 입장하기'
    >
    </Greeting>
  )
}