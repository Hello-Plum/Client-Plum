import React from 'react'
import styled from 'styled-components'
import OwnerComponent from './components/OwnerComponent'
import { useConfirmMeeting } from '../../../hooks/owner/useConfirmAvailableTime'
import TabLayout from '../../../components/common/TabLayout'

export default function Confirm() {
  const { handleBackBtnClick, handleConfirmBtnClick } = useConfirmMeeting()
  
  return (
    <TabLayout
      header="회의 일정 확정"
      onClickBackButton={handleBackBtnClick}
    >
      <Styled.PageWrapper>
        <OwnerComponent />
      </Styled.PageWrapper>
    </TabLayout>
  )
}

const Styled = {
  PageWrapper: styled.div`
    margin: 1rem 0 0 0;
  `,
}