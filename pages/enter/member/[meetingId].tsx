import React from 'react'
import Layout from '../../../components/common/Layout'
import CheckAvailableTitleComponent from '../../../components/enter/member/CheckAvailableTitleComponent'
import { checkAvailableTimeSteps } from '../../../data/available/checkAvailableTimeData'
import { useCheckAvailableTime } from '../../../hooks/member/useCheckAvailableTime'
import CheckAvailableBodyComponent from '../../../components/enter/member/CheckAvailableBodyComponent'
import { styled } from 'styled-components'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { useRouter } from 'next/router'
import { useMeetingDetail } from '../../../hooks/meetingDetail/useMeetingDetail'

export default function Available() {
  const { page, isActivated, availableTimeInfo, setAvailableTimeInfoForm, handleBackBtnClick, handleBtnClick } = useCheckAvailableTime()
  const router = useRouter()
  const { meetingId } = router.query
  const { isLoading, detail } = useMeetingDetail(meetingId)
  const currentStep = checkAvailableTimeSteps[page]

  return (
    <Layout
      buttons={['다음']}
      isButtonActivated={isActivated}
      header="가능한 시간 입력"
      onClickBackButton={handleBackBtnClick}
      onClickButton={handleBtnClick}
    >
      {isLoading ? (
        <Styled.Loading>
          <AiOutlineLoading3Quarters size={45} />
        </Styled.Loading>
      ) : (
        <>
          {page === 3 ? null : (
            <Styled.Info>
            {`회의는 ${detail?.duration}시간동안 ${detail?.place}${
              detail?.placeDetail ? '(' + detail?.placeDetail + ')' : null
            }로 진행될 예정이에요!`}
          </Styled.Info>
          )}
          <CheckAvailableTitleComponent step={currentStep} />
          <CheckAvailableBodyComponent
            step={currentStep}
            meetingDetail={detail}
            availableTimeInfo={availableTimeInfo}
            setAvailableTimeInfo={setAvailableTimeInfoForm}
          />
        </>
      )}
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
  Loading: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
}
