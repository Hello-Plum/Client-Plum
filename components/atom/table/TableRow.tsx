import React from 'react'
import styled from "styled-components"
import TableHeading from './TableHeading'
import TableData from './TableData'

interface TableRowBodyProps {
  step: string
  contents: Array<string>
}

const BodyTypes: { [key: string]: React.JSXElementConstructor<any>} = {
  'head': TableHeading,
  'data': TableData,
}

export default function TableRow({ step, contents }: TableRowBodyProps) {
  const CurrentTableComponent = BodyTypes[step]
  return(
    <Styled.Tr>
      {contents.map((content, i) => {
        return (
          <CurrentTableComponent 
            key={i}
            data={content}
          />
        )
      })}
    </Styled.Tr>
  )
}
const Styled = {
  Tr: styled.tr`
  `,
}