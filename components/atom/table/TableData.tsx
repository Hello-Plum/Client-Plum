import React from 'react'
import styled from 'styled-components'
import { usePriorityTime } from '../../../hooks/member/usePriorityTime'

interface TableDataProps {
  data: string
  onClickTableData?: () => void
}

export default function TableData({ data, onClickTableData }: TableDataProps) {
  const { groupSelectedTimeBlock } = usePriorityTime()

  const groupList: number[] = []
  groupSelectedTimeBlock.forEach((group) => {
    group.forEach((element) => {
      groupList.push(element)
    })
  })
  console.log('groupList', groupList)

  return (
    <Styled.Td 
      id={data} 
      onClick={() => console.log('data', data)}
      isSelected={groupList.includes(Number(data))}
    >
      {data}
    </Styled.Td>
  )
}

const Styled = {
  Td: styled.td<{ isSelected: boolean }>`
    width: 4.5rem;
    height: 1.4rem;
    text-align: center;
    border: 1px solid #000;

    vertical-align: top; /* 위 */
    vertical-align: bottom; /* 아래 */
    vertical-align: middle;
    background-color: ${({ isSelected }) => (isSelected? 'blue': 'white')};
    cursor: pointer;
    pointer-events: ${({ isSelected }) => (isSelected? 'auto': 'none')};
  `,
}
