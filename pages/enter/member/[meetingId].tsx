import React from 'react'
import Layout from '../../../components/common/Layout'
import CheckAvailableTitleComponent from './CheckAvailableTitleComponent'
import { checkAvailableTimeSteps } from '../../../data/available/checkAvailableTimeData'
import { useCheckAvailableTime } from '../../../hooks/member/useCheckAvailableTime'
import CheckAvailableBodyComponent from './CheckAvailableBodyComponent'
import { styled } from 'styled-components'

export default function Available() {
  const { step, availableTimeInfo, setAvailableTimeInfoForm, handleBackBtnClick, handleBtnClick } = useCheckAvailableTime()
  const currentStep = checkAvailableTimeSteps[step]
  
  return (
    <Layout 
      buttons={['다음']}
      isButtonActivated={true}
      header='가능한 시간 입력'
      onClickBackButton={handleBackBtnClick}
      onClickButton={handleBtnClick}>
      <Styled.Info>
        {`회의는 2시간동안 온라인(구글미트)로 진행될 예정이에요!`}
      </Styled.Info>
      <CheckAvailableTitleComponent step={currentStep} />
      <CheckAvailableBodyComponent 
        step={currentStep}
        availableTimeInfo={availableTimeInfo}
        setAvailableTimeInfo={setAvailableTimeInfoForm}
      />
      </Layout>
  )
}

const Styled = {
  Info: styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 0.6rem;
    margin: 2.2rem 0px 1rem 1rem;
    
    font-style: italic;
    font-size: 1.5rem;
    font-weight: bold;
    font-color: black;
    opacity: 80%;
    letter-spacing: -0.03rem;
  `,
}