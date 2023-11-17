import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import TableRow from '../atom/table/TableRow'
import { AvailableTimeInfo, StepProps } from '../../types/enter/checkMeetingInterface'
import { Detail } from '../../types/cardInfo/showInfoInterface'
import { usePriorityTime } from '../../hooks/member/usePriorityTime'

interface TimeTableBodyProps {
  meetingDetail: Detail
  availableTimeInfo: AvailableTimeInfo
}

export default function TimeTable({ meetingDetail, availableTimeInfo }: TimeTableBodyProps) {
  const { groupSelectedTimeBlock } = usePriorityTime()
  const [mounted, setMounted] = useState<boolean>(false)
  const availableGroupList: any = [...groupSelectedTimeBlock]
  const mergeRowList = availableGroupList.map((group: any) => group.slice(1)).flat()
  console.log('mergeRowList', mergeRowList)
  // 각 배열 원소들 빼서 넣기 -> 
  
  useEffect(() => {
    setMounted(true)
  }, [])

  const slots: number[] = []
  for (let i = 0; i < 7; ++i) {
    let key = Math.floor(i / 7) + 34 * (i % 7)
    slots.push(key)
  }

  const tableRows = []
  for (let i = 0; i < 34; ++i) {
    tableRows.push(i)
  }

  return (
    mounted && (
      <Styled.TableWrapper>
        <Styled.Table>
          {tableRows.map((tableRow) => {
            return (
              <TableRow
                key={tableRow}
                contents={slots.map((slot) => Number(slot + tableRow)).filter((slot) => { return !mergeRowList.includes(slot) })}
                meetingDetail={meetingDetail}
                availableTimeInfo={availableTimeInfo}
              />
            )
          })}
        </Styled.Table>
      </Styled.TableWrapper>
    )
  )
}

const Styled = {
  TableWrapper: styled.div``,
  Table: styled.table`
    border-collapse: collapse;
  `,
}
