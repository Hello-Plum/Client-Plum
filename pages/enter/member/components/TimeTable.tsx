import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import TableRow from './TableRow'
import { AvailableTimeInfo } from '../../../../types/enter/checkMeetingInterface'
import { Detail } from '../../../../types/cardInfo/showInfoInterface'

interface TimeTableBodyProps {
  meetingDetail: Detail
  availableTimeInfo: AvailableTimeInfo
  setAvailableTimeInfo: (input: Partial<AvailableTimeInfo>) => void
}

export default function TimeTable({ meetingDetail, availableTimeInfo, setAvailableTimeInfo }: TimeTableBodyProps) {
  const [mounted, setMounted] = useState<boolean>(false)
  const availableGroupList: any = [...availableTimeInfo.availableTimeList]
  const mergeRowList = availableGroupList.map((group: any) => group.slice(1)).flat()
  
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
  TableWrapper: styled.div`
    margin: 1rem;
  `,
  Table: styled.table`
    border-collapse: collapse;
  `,
}
