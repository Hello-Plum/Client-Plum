import React, { useState } from 'react'
import Layout from '../../../components/common/Layout'
import { useParams, useRouter } from 'next/navigation'
import { styled } from 'styled-components'
import ConfirmMeetingBodyComponent from './ConfirmMeetingBodyComponent'

const menuArr = [
  { type: 'best', name: '최적의 회의시간' },
  { type: 'entire', name: '종합 일정 시간표' },
];

export default function Confirm() {
  const [currentTab, clickTab] = useState(0);
  const router = useRouter()
  const param = useParams()
  //console.log('param', param.meetingId)

  const selectMenuHandler = (index: number) => {
    clickTab(index);
  };

  return (
    <Layout 
      buttons={['확정']} 
      isButtonActivated={true} 
      header="회의 일정 확정">
      <Styled.TabWrapper>
        <Styled.TabMenu>
          {menuArr.map((menu, index) => {
            return (
              <Styled.Menu onClick={() => selectMenuHandler(index)}>{menu.type}</Styled.Menu>
            )
          })}
        </Styled.TabMenu>
        <Styled.Content>
          {menuArr[currentTab].name}
        </Styled.Content>
      </Styled.TabWrapper>
    </Layout>
  )
}

const Styled = {
  TabWrapper : styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;
  `,
  TabMenu : styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    
    background-color: #dcdcdc;
    margin-bottom: 5rem;
    margin-top: 10px;
  `,
  Menu : styled.div`
    color: black;
    font-size: 1.9rem;
    font-weight: 550;
    letter-spacing: -0.03rem;
  `,
  Content : styled.div`
    text-align: center;
  `,

}