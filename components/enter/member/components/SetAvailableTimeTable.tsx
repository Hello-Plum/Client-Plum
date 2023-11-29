import React, { useEffect } from 'react'
import { StepProps } from '../../../../types/enter/checkMeetingInterface'
import Selecto from 'react-selecto'
import { styled } from 'styled-components'
import { useCheckAvailableTimeTable } from '../../../../hooks/member/useCheckAvailableTimeTable'
import WeekComponent from '../../../atom/WeekComponent'
import TimeComponent from '../../../atom/TimeComponent'

export default function SetAvailableTime({ meetingDetail, availableTimeInfo, setAvailableTimeInfo }: StepProps) {
  const { selectedWeek, setSelectedWeek, handleTimeTableSelect, disabledDayTable, disabledWeekTable } = useCheckAvailableTimeTable()

  /*
  useEffect(() => {
    setSelectedWeek(meetingDetail?.selectedWeek)
    setIsPeriod(meetingDetail?.period)
  },[])
  */

  const slots = []
  for (let i = 0; i < 238; ++i) {
    slots.push(i)
  }

  return (
    <Styled.Root>
      <WeekComponent />
      <Styled.TimeTable>
        <TimeComponent />
        <Styled.TimeSelect>
          <div className="app">
            <div className="container">
              <Selecto
                dragContainer={'.slot'} // .slot 자체를 드래그 영역으로
                selectableTargets={['.selecto-area .slot']}
                hitRate={0} // 낮을수록 민감
                selectByClick={true}
                selectFromInside={true}
                continueSelect={true}
                ratio={0}
                onSelect={handleTimeTableSelect}
              />

              <div className="select-container">
                <div className="elements selecto-area" id="selecto1">
                  {slots.map((i) => {
                    /**
                     * 30분 단위 점선
                     */
                    let sep = ''
                    if (Math.floor((i / 7) % 2) === 0) {
                      sep = ' dotted'
                    } else if (Math.floor((i / 7) % 2) === 1) {
                      sep = ' solid'
                    }
                    sep += meetingDetail?.period ? disabledWeekTable(i, meetingDetail?.selectedWeek) : disabledDayTable(i, meetingDetail?.selectedWeek)
                    return <div id={String(i)} className={'slot' + sep} key={i}></div>
                  })}
                </div>
              </div>
              <div className="empty elements"></div>
            </div>
          </div>
        </Styled.TimeSelect>
      </Styled.TimeTable>
    </Styled.Root>
  )
}

const Styled = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 0px 5.2rem 1rem;
  `,
  TimeTable: styled.div`
    display: flex;
    flex-direction: row;
  `,
  TimeSelect: styled.div`
    display: flex;
    flex-direction: column;
  `,
}
