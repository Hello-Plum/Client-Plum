import React from 'react'
import styled from 'styled-components'
import Layout from '../../../../components/common/Layout'
import InputComponent from '../../../../components/atom/InputComponenet'
import TitleComponent from '../../../../components/modules/TitleComponent'
import { useConfirmMeeting } from '../../../../hooks/owner/useConfirmAvailableTime'

export default function Password() {
  const { setPassword, handleBackBtnClick, handleBtnClick } = useConfirmMeeting()

  return (
    <Layout 
      buttons={['다음']} 
      isButtonActivated={true} 
      header="회의 일정 확정"
      onClickBackButton={handleBackBtnClick}
      onClickButton={handleBtnClick}
    >
      <TitleComponent title={'방 비밀번호를 입력해주세요.'} subTitle={'비밀번호가 있어야 회의 시간을 확정할 수 있어요'} />
      <Styled.InputWrapper>
        <InputComponent
          id={'hostpassword'}
          type={'password'}
          placeholder={'방 비밀번호'} 
          onChangeInput={(e) => setPassword(e.target.value)}
        />
      </Styled.InputWrapper>
    </Layout>
  )
}

const Styled = {
  InputWrapper: styled.div`
    padding: 1rem;
  `,
}