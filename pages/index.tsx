import React from 'react'
import Greeting from '../components/common/Greeting'
import { useRouter } from 'next/router'

export default function Index() {
  const router = useRouter()

  return (
    <Greeting buttons={['약속 생성하기']} onClickButton={() => router.push('/create')}>
    </Greeting>
  )
}