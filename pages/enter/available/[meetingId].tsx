import React from 'react'
import Layout from '../../../components/common/Layout'
import CheckAvailableTitleComponent from './CheckAvailableTitleComponent'
import { checkAvailableTimeSteps } from '../../../data/available/checkAvailableTimeData'
import { useCheckAvailableTime } from '../../../hooks/available/useCheckAvailableTime'
import CheckAvailableBodyComponent from './CheckAvailableBodyComponent'

export default function Available() {
  const { step, availableTimeInfo, setAvailableTimeInfoForm, handleBackBtnClick, handleBtnClick } = useCheckAvailableTime()
  const currentStep = checkAvailableTimeSteps[step]
  
  return (
    <Layout 
      buttons={['다음']}
      header='가능한 시간 입력'
      onClickBackButton={handleBackBtnClick}
      onClickButton={handleBtnClick}>
      <CheckAvailableTitleComponent step={currentStep} />
      <CheckAvailableBodyComponent 
        currentStep={currentStep}
        availableTimeInfo={availableTimeInfo}
        setAvailableTimeInfo={setAvailableTimeInfoForm}
      />
      </Layout>
  )
}