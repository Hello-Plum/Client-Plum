import React from 'react'
import styled from 'styled-components'
import Layout from '../../../components/common/Layout'
import OwnerComponent from './components/OwnerComponent'
import { useConfirmMeeting } from '../../../hooks/owner/useConfirmAvailableTime'

export default function Confirm() {
  const { handleBackBtnClick, handleConfirmBtnClick } = useConfirmMeeting()

  return (
    <Layout 
      buttons={['확정']} 
      isButtonActivated={true} 
      header="회의 일정 확정"
      onClickBackButton={handleBackBtnClick}
      onClickButton={handleConfirmBtnClick}
    >
      <Styled.PageWrapper>
        <OwnerComponent />
      </Styled.PageWrapper>
    </Layout>
  )
}

const Styled = {
  PageWrapper: styled.div`
    margin: 1rem 0 0 0;
  `,
}