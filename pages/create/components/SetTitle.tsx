import React from 'react'
import styled from "styled-components"

export default function SetTitle() {
  return (
    <Styled.Input 
      id="title" 
      type="text" 
      onChange={(e) => { console.log(e.target.value) }}
    />
  )
}

const Styled = {
  Input : styled.input`
    display: flex;
    width: 100%;
    height: 4.2rem;
    border: 0.1rem solid #8e8e8e;
    border-radius: 0.5rem;

    font-size: 1.6rem;
    line-height: 3rem;
    color: #444;
    resize: none;
  `,
}