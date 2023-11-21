import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { usePriorityTime } from '../../../hooks/member/usePriorityTime'
import { Detail } from '../../../types/cardInfo/showInfoInterface'
import { AvailableTimeInfo } from '../../../types/enter/checkMeetingInterface'

interface TableRowBodyProps {
  contents: number[]
  meetingDetail: Detail
  availableTimeInfo: AvailableTimeInfo
}

export default function TableRow({ contents, meetingDetail, availableTimeInfo }: TableRowBodyProps) {
  const { priorities, handlePriority } = usePriorityTime()
  const availableGroupList: any = [...availableTimeInfo.availableTimeList]
  const mergeRowFirstList = availableGroupList.map((group: any) => group[0])

  const savePriority = (content: number) => {
    console.log('priorities', priorities)
    return priorities.indexOf(content) + 1
  }

  return (
    <Styled.Tr>
      {contents.map((content) => {
        return (
          <Styled.Td
            id={`${content}`}
            key={content}
            onClick={handlePriority}
            isAvailabled={mergeRowFirstList.includes(content)}
            rowSpan={mergeRowFirstList.includes(content) ? availableGroupList.filter((arr: any) => arr[0] === content)[0].length : 1}
          >
          {(priorities.includes(content)) ? savePriority(content) : ''}
          </Styled.Td>

        )
      })}
    </Styled.Tr>
  )
}
const Styled = {
  Tr: styled.tr``,
  Td: styled.td<{ isAvailabled : boolean }>`
    width: 4.5rem;
    height: 1.4rem;
    text-align: center;
    border: 1px solid #000;

    vertical-align: top; /* 위 */
    vertical-align: bottom; /* 아래 */
    vertical-align: middle;
    background-color: ${({ isAvailabled }) => (isAvailabled ? 'blue' : 'white')};
    cursor: pointer;
    pointer-events: ${({ isAvailabled }) => (isAvailabled ? 'auto' : 'none')}; d
  `,
}