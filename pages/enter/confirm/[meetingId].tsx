import React from 'react'
import Layout from '../../../components/common/Layout'
import { useParams, useRouter } from 'next/navigation'

export default function Confirm() {
  const router = useRouter()
  const param = useParams()
  //console.log('param', param.meetingId)
  
  return (
    <Layout
      buttons={['확정']} 
      isButtonActivated={true}
      header='회의 일정 확정'>
    </Layout>
  )
}