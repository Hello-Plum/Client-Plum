import React, { useEffect } from 'react'
import { StepProps } from '../../../../types/enter/checkMeetingInterface'
import Selecto from 'react-selecto'
import { styled } from 'styled-components'
import { timeList, weekList } from '../../../../data/available/checkAvailableTimeTableData'
import { useCheckAvailableTimeTable } from '../../../../hooks/member/useCheckAvailableTimeTable'

export default function SetAvailableTime({ meetingDetail, availableTimeInfo, setAvailableTimeInfo }: StepProps) {
  const { selectedWeek, setSelectedWeek, isPeriod, setIsPeriod, handleTimeTableSelect, disabledDayTable, disabledWeekTable } = useCheckAvailableTimeTable()

  useEffect(() => {
    setSelectedWeek(meetingDetail?.selectedWeek)
    setIsPeriod(meetingDetail?.period)
  },[])

  const slots = []
  for (let i = 0; i < 238; ++i) {
    slots.push(i)
  }

  return (
    <Styled.Root>
      <Styled.WeekContainer>
        {weekList.map((day) => {
          return <Styled.Day>{day}</Styled.Day>
        })}
      </Styled.WeekContainer>
      <Styled.TimeTable>
        <Styled.TimeContainer>
          {timeList.map((time) => {
            return <Styled.Time>{time}</Styled.Time>
          })}
        </Styled.TimeContainer>
        
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
                    sep += isPeriod ? disabledWeekTable(i, selectedWeek) : disabledDayTable(i, selectedWeek)
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
  WeekContainer: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin: 0px 0.5rem 0px 3.2rem;
  `,
  Day: styled.div`
    text-align: center;
    font-size: 1.4rem;
    font-weight: bold;
    letter-spacing: -0.03rem; 
  `,
  TimeTable: styled.div`
    display: flex;
    flex-direction: row;
  `,
  TimeContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
  `,
  Time: styled.div`
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: -0.03rem;
  `,
  TimeSelect: styled.div`
    display: flex;
    flex-direction: column;
  `,
}
