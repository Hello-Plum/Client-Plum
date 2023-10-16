import React from 'react'
import { StepProps } from '../../../../types/enter/checkMeetingInterface'
import Selecto from 'react-selecto'
import { styled } from 'styled-components'

export default function SetAvailableTime({ availableTimeInfo, setAvailableTimeInfo }: StepProps) {
  const week: Array<string> = ['월', '화', '수', '목', '금', '토', '일']
  const time: Array<string> = ['7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM', '12AM']
  const slots = []

  for (let i = 0; i < 238; ++i) {
    slots.push(i)
  }

  return (
    <Styled.Root>
      <Styled.WeekContainer>
        {week.map((day) => {
          return <Styled.Day>{day}</Styled.Day>
        })}
      </Styled.WeekContainer>
      <Styled.TimeTable>
        <Styled.TimeContainer>
          {time.map((hour) => {
            return <Styled.Time>{hour}</Styled.Time>
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
                onSelect={(e) => {
                  // 선택한 div 확인용 코드
                  console.log('e.selected', e.selected)
                  e.added.forEach((el) => {
                    if(Number(el.id) % 7 !== 0) {
                      el.classList.add('selected')
                    }
                  })
                  e.removed.forEach((el) => {
                    el.classList.remove('selected')
                  })
                }}
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

                    /**
                     * 요일별 비활성화
                     */
                    if (i % 7 === 0) { // Monday
                      sep = ' disabled'
                    }

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
    margin: 0px 4.5rem;
    gap: 3.5rem;
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
    margin: 1rem 0px 1rem;
    gap: 1.745rem;

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
