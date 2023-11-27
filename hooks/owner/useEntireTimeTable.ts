import { useRecoilState } from "recoil"
import { getEntireTimeTable } from "../../api/checkEntireTimeTableApi"
import { useRouter } from "next/router"
import { CheckEntireTimeTableResponse } from "../../types/enter/checkEntireTimeTableBody"
import { entireTimeTableListState, entireTimeTableMemberListState } from "../../states/atom"
import { useEffect } from "react"

export const useEntireTimeTable = (meetingId: string | string[] | undefined) => {
  const [contents, setContents] = useRecoilState(entireTimeTableListState)
  const [members, setMembers] = useRecoilState(entireTimeTableMemberListState)
  let contentList = Array.from({ length: 238 }, () => Array().fill(''))
  
  // 서버 연결 후,
  const checkEntireTimeTable = async () => {
    try {
      const { data } = await getEntireTimeTable(meetingId)
      console.log('checkEntireTimeTable data', data)
      
      // 데이터 전처리
      const memberList = [...new Set(data.map((availableElement: CheckEntireTimeTableResponse) => { return availableElement.name }))]
      setMembers(memberList)

      data.forEach((availableElement: CheckEntireTimeTableResponse) => {
        for (let i = availableElement.startTimeIdx; i <= availableElement.endTimeIdx; i++) {
          contentList[i].push(availableElement.name)
        }
      })
      setContents(contentList)
      console.log('checkEntireTimeTable contents', contentList)
    } catch (error) {
      console.log('[ERROR] checkEntireTimeTable error', error)
    }
  }
  
  useEffect(() => {
    checkEntireTimeTable()
  }, [meetingId])
  // timetable 만들 데이터 준비 후, 주입

  return { members, contents }
}