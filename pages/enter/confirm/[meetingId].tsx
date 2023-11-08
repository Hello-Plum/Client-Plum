import React from 'react'
import styled from 'styled-components'
import Layout from '../../../components/common/Layout'
import ConfirmMeetingComponent from './components/ConfirmMeetingComponent'

export default function Confirm() {

  return (
    <Layout buttons={['확정']} isButtonActivated={true} header="회의 일정 확정">
      <Styled.PageWrapper>
        <ConfirmMeetingComponent />
      </Styled.PageWrapper>
    </Layout>
  )
}

const Styled = {
  PageWrapper: styled.div`
    margin: 1rem 0 0 0;
  `,
}