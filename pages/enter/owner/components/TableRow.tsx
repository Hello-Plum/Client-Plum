import React from 'react'
import styled from 'styled-components'
import { usePriorityTime } from '../../../../hooks/member/usePriorityTime'
import { AvailableTimeInfo } from '../../../../types/enter/checkMeetingInterface'
import { useRouter } from 'next/router'
import { useEntireTimeTable } from '../../../../hooks/owner/useEntireTimeTable'

interface TableRowBodyProps {
  elements: number[]
}

export default function TableRow({ elements }: TableRowBodyProps) {
  const router = useRouter()
  const { meetingId } = router.query
  const { members, contents } = useEntireTimeTable(meetingId)

  return (
    <Styled.Tr>
      {elements.map((element) => {
        return (
          <Styled.Td
            id={`${element}`}
            key={element}
            isAvailabled={contents[element].length ? contents[element].length / members.length : 0}
          >
          {}
          </Styled.Td>

        )
      })}
    </Styled.Tr>
  )
}
const Styled = {
  Tr: styled.tr``,
  Td: styled.td<{ isAvailabled: number }>`
    width: 4.5rem;
    height: 1.4rem;
    text-align: center;
    border: 1px solid #000;

    vertical-align: top; /* 위 */
    vertical-align: bottom; /* 아래 */
    vertical-align: middle;
    background-color: ${({ isAvailabled }) => (isAvailabled ? `rgba(0, 0, 255, ${isAvailabled})` : 'white')};
    cursor: pointer;
  `,
}