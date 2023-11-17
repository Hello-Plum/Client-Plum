import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { usePriorityTime } from '../../../hooks/member/usePriorityTime'

interface TableDataProps {
  data: string
}

export default function TableData({ data }: TableDataProps) {
  const { groupSelectedTimeBlock, priorities, handlePriority } = usePriorityTime()
  const [isSelected, setIsSelected] = useState(false)

  //const savePriorities = [...priorities]
  const groupList: number[] = []
  const pointerList: number[] = []
  groupSelectedTimeBlock.forEach((group) => {
    group.forEach((element) => {
      groupList.push(element)
      pointerList.push(element)
    })
  })

  /*
  // pointerList: 체크한 시간들이 들어있음
  useEffect(() => {
    //console.log('useEffect priorities', priorities)

    savePriorities.forEach((priority) => {
      //priority [1,2,3]
      // groupList [1,2,3]
      groupList.forEach((element) => {
        if (priority.includes(element)) {
          // pointerList에 priority 배열에 있는 데이터 지우기
          for(let i=0; i < priority.length; i++) {
            pointerList.splice(pointerList.indexOf(priority[i]), 1)
          }
        }
      })
    })
  }, [pointerList])
  */

  return (
    <Styled.Td 
      id={data} 
      onClick={handlePriority}
      isSelected={groupList.includes(Number(data))}
      isPointerEvent={groupList.includes(Number(data))}
    />
  )
}

const Styled = {
  Td: styled.td<{ isSelected: boolean, isPointerEvent: boolean }>`
    width: 4.5rem;
    height: 1.4rem;
    text-align: center;
    border: 1px solid #000;

    vertical-align: top; /* 위 */
    vertical-align: bottom; /* 아래 */
    vertical-align: middle;
    background-color: ${({ isSelected }) => (isSelected? 'blue': 'white')};
    cursor: pointer;
    pointer-events: ${({ isPointerEvent }) => (isPointerEvent? 'auto': 'none')};
  `,
}
