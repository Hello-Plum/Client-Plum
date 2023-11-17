import React from 'react'
import styled from 'styled-components'
import Layout from '../../../components/common/Layout'
import OwnerComponent from './components/OwnerComponent'

export default function Confirm() {

  return (
    <Layout buttons={['확정']} isButtonActivated={true} header="회의 일정 확정">
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