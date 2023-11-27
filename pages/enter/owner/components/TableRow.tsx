import React from 'react'
import styled from 'styled-components'
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
    border: 0.5px solid #717B88;

    vertical-align: top; /* 위 */
    vertical-align: bottom; /* 아래 */
    vertical-align: middle;
    background-color: ${({ isAvailabled }) => (isAvailabled ? `rgba(49, 130, 246, ${isAvailabled})` : 'white')};
    cursor: pointer;
  `,
}