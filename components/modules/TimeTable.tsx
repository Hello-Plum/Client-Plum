import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import TableRow from '../atom/table/TableRow'
import { weekList } from '../../data/available/checkAvailableTimeTableData'
import { table } from 'console'

export default function TimeTable() {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const slots: string[] = []
  for (let i = 0; i < 7; ++i) {
    let key = Math.floor(i / 7) + 34 * (i % 7)
    slots.push(`${key}`)
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
                step="data"
                contents={slots.map((slot) => String(Number(slot) + tableRow))}
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
