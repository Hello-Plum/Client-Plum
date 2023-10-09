import React, { useState } from 'react'
import styled from "styled-components"

export default function SetAdditionalInfo() {
  const [textAreaCount, setTextAreaCount] = useState(0)

  const onTextAreaHandler = (e: any) => {
    setTextAreaCount(e.target.value.length)
  }

  return (
    <Styled.TextAreaWrapper>
      <Styled.TextArea 
        onChange={onTextAreaHandler}
        maxLength={50}
        placeholder='회의 안건, 준비물 등 회의와 관련하여 알리고 싶은 추가내용을 적어 보세요.'
      />
      <Styled.P>
        <Styled.Span>{textAreaCount}</Styled.Span>
        <Styled.Span>/50자</Styled.Span>
      </Styled.P>
    </Styled.TextAreaWrapper>
  )
}

const Styled = {
  TextAreaWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: 1.2rem;
  `,  
  TextArea: styled.textarea`
    width: 100%;
    padding: 1rem 1.4rem;
    border-radius: 0.5rem;
    border: 0.1rem solid #8e8e8e;
    font-size: 1.4rem;
    line-height: 3rem;
    color: #444;
    resize: none;
  `,
  P: styled.p`
  `,
  Span: styled.span``
}