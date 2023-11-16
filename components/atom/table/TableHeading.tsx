import React from 'react'
import styled from "styled-components"

interface TableHeadingProp {
  data: string
  onClickTableData?: () => void
}

export default function TableHeading({ data, onClickTableData }: TableHeadingProp) {
  return(
    <Styled.Th onClick={onClickTableData}>
      {data}
    </Styled.Th>
  )
}

const Styled = {
  Th: styled.th`
    width: 4.5rem;
    height: 1.4rem;
    text-align: center;
    border: 1px solid #000;

    vertical-align: top;	/* 위 */
    vertical-align: bottom;   /* 아래 */
    vertical-align: middle;
  `,
}