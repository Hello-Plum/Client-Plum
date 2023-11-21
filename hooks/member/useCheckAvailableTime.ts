import { useRecoilState, useRecoilValue } from "recoil"
import { availableTimeInfoState, checkAvailableTimeState, checkMemberAvailableBtnActivatedState, memberSelectedTimeBlockList, priorityListState } from "../../states/atom"
import { useRouter } from "next/router"
import { AvailableTimeInfo } from "../../types/enter/checkMeetingInterface"
import { postCheckMemberAvailable } from '../../api/checkMemberAvailableApi'

export const useCheckAvailableTime = () => {
  const [page, setPage] = useRecoilState(checkAvailableTimeState)
  const [isActivated, setIsActivated] = useRecoilState(checkMemberAvailableBtnActivatedState)
  const [availableTimeInfo, setAvailableTimeInfo] = useRecoilState(availableTimeInfoState)
  const selectedTimeBlock = useRecoilValue(memberSelectedTimeBlockList)
  const priorityList = useRecoilValue(priorityListState)
  const router = useRouter()
  const { meetingId } = router.query
  
  // 멤버가 선택한 시간들을 블록으로 묶기
  const groupConsecutiveNumbers = (blocks: number[]) => {
    let result = []
    const caculateBlocks = blocks.map((block) => Math.floor(block / 7) + 34 * (block % 7))
    
    if (caculateBlocks.length === 0) return []
    caculateBlocks.sort((a, b) => a - b); // 숫자 배열을 오름차순으로 정렬
    
    let temp = [caculateBlocks[0]]
    for (let i = 1; i < caculateBlocks.length; i++) {
      if (caculateBlocks[i] - caculateBlocks[i - 1] === 1) { // 현재 숫자와 이전 숫자가 연속된 경우
        temp.push(caculateBlocks[i])
      } else { // 연속되지 않는 경우, 이전까지 묶인 숫자들을 결과 배열에 추가하고 새로운 묶음 시작
        result.push(temp)
        temp = [caculateBlocks[i]]
      }
    }
    result.push(temp) // 마지막 묶음을 결과 배열에 추가
    return result
  }

  const setAvailableTimeInfoForm = (input: Partial<AvailableTimeInfo>) => {
    setAvailableTimeInfo({ ...availableTimeInfo, ...input })
    if (input.name) {
      if (/^[가-힣]{2,4}$/.test(input.name)) setIsActivated(true)
      else setIsActivated(false)
    }
    else setIsActivated(false)
  }

  const handleBackBtnClick = () => {
    if (page === 0) router.push(`/enter/${meetingId}`)
    else setPage(page - 1)
  }

  const handleBtnClick = () => {
    switch (page) {
      case 0:
        setPage(page + 1)
        setIsActivated(false)
        break
      case 1:
        const blocks = [...selectedTimeBlock]
        const groupList = groupConsecutiveNumbers(blocks)
        setAvailableTimeInfoForm({ availableTimeList: groupList })
        setPage(page + 1)
        setIsActivated(false)
        break
      case 2:
        setAvailableTimeInfoForm({ priorities: priorityList })
        checkMemberAvailable()
        break
    }
  }

  const checkMemberAvailable = async () => {
    try {
      const groupList = [...availableTimeInfo.availableTimeList]
      const timeGroupList = groupList.map((time) => { 
        return { 
          'startTimeIdx': time[0], 
          'endTimeIdx': time[time.length - 1] 
        }
      })
      const requestData = {
        name: availableTimeInfo.name,
        availableTimes: timeGroupList,
        priorities: priorityList
      }

      const { data } = await postCheckMemberAvailable(meetingId, requestData)
      console.log('data', data)
      router.push(`/`)
    } catch (error) {
      console.log('[ERROR] createMeeting error', error)
    }
  }

  return { page, isActivated, availableTimeInfo, setAvailableTimeInfoForm, handleBackBtnClick, handleBtnClick }
}