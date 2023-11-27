import React from 'react'
import styled from 'styled-components'
import { placeType } from '../../../data/create/createMeetingData'
import { StepProps } from '../../../types/create/createMeetingInterface'
import StringButtonComponent from '../../../components/atom/StringButtonComponent'
import InputComponent from '../../../components/atom/InputComponenet'

export default function SetPlace({ meetingInfo, setMeetingInfo }: StepProps) {
  return (
    <Styled.PlaceWrapper>
      {placeType.map((type, i) => {
        return (
          <>
            <StringButtonComponent
              key={i+type}
              isActivated={meetingInfo.place === type ? true : false}
              buttonName={type === 'ONLINE' ? '온라인' : type === 'OFFLINE' ? '오프라인' : '미정'}
              handleClick={(e) => {
                setMeetingInfo({ place: type, placeDetail: '' })
              }}
            />
            {type === 'UNDEFINED' ? null : meetingInfo.place === type ? (
              <InputComponent
                id="placeDetail"
                type="text"
                placeholder={
                  type === 'ONLINE'
                    ? '(선택) 회의를 진행할 온라인 툴을 입력해주세요.'
                    : '(선택) 회의를 진행할 장소를 입력해주세요.'
                }
                value={meetingInfo.placeDetail}
                onChangeInput={(e) => {
                  setMeetingInfo({ placeDetail: e.target.value })
                }}
              />
            ) : null}
          </>
        )
      })}
    </Styled.PlaceWrapper>
  )
}

const Styled = {
  PlaceWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  `,
  Button: styled.button<{ isClicked: boolean }>`
    width: 100%;
    padding: 1.5rem;
    border-radius: 0.6rem;
    background: ${({ isClicked }) => (isClicked ? '#3182F6' : '#F2F4F6')};

    text-align: center;
    color: white;
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: 0.052rem;
    cursor: pointer;
  `,
}
