import React, { useState } from 'react'
import Layout from '../../components/common/Layout'
import { useRouter } from 'next/router'
import CreateMeetingTitleComponent from './CreateMeetingTitleComponenet'
import { createMeetingSteps } from '../../data/create/createMeetingData'
import { useCreateMeeting } from '../../hooks/create/useCreateMeeting'
import CreateMeetingBodyComponent from './CreateMeetingBodyComponent'

export default function Create() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const currentStep = createMeetingSteps[step]
  //const { setMeetingButton } = useCreateMeeting

  return (
    <Layout 
      buttons={['다음']} 
      header='회의 정보 입력'
      onClickBackButton={() => router.push('/')}
      onClickButton={() => {
        setStep(step+1)
      }}
    >
      <CreateMeetingTitleComponent step={currentStep}/>
      <CreateMeetingBodyComponent />
    </Layout>
  )
}