import React from 'react'
import Layout from '../../components/common/Layout'
import CreateMeetingTitleComponent from '../../components/create/CreateMeetingTitleComponenet'
import { createMeetingSteps } from '../../data/create/createMeetingData'
import { useCreateMeeting } from '../../hooks/create/useCreateMeeting'
import CreateMeetingBodyComponent from '../../components/create/CreateMeetingBodyComponent'

export default function Create() {
  const { step, isActivated, meetingInfo, setMeetingInfoForm, handleBackBtnClick, handleBtnClick } = useCreateMeeting()
  const currentStep = createMeetingSteps[step]
  
  return (
    <Layout 
      buttons={['다음']} 
      isButtonActivated={isActivated}
      header='회의 정보 입력'
      onClickBackButton={handleBackBtnClick}
      onClickButton={handleBtnClick}
    >
      <CreateMeetingTitleComponent step={currentStep}/>
      <CreateMeetingBodyComponent 
        step={currentStep}
        meetingInfo={meetingInfo}
        setMeetingInfo={setMeetingInfoForm}
      />
    </Layout>
  )
}