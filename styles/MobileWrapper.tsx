import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

export default function MobileWrapper({ children }: PropsWithChildren) {
  return (<Styled.Root>{children}</Styled.Root>);
}

const Styled ={
  Root: styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    
    margin: 0px auto;
    padding-right: 2rem;
    padding-left: 2rem;
    max-width: var(--app-max-width,37.5rem);
    min-height: calc(var(--vh,1vh) * 100);
  `
}
