import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { availableTimeInfoState, checkAvailableTimeState, groupSelectedTimeBlockList, memberSelectedTimeBlockList } from "../../states/atom"
import { useRouter } from "next/navigation"
import { AvailableTimeInfo } from "../../types/enter/checkMeetingInterface"

export const useCheckAvailableTime = () => {
  const [step, setStep] = useRecoilState(checkAvailableTimeState)
  const [availableTimeInfo, setAvailableTimeInfo] = useRecoilState(availableTimeInfoState)
  const selectedTimeBlock = useRecoilValue(memberSelectedTimeBlockList)
  const setGroupSelectedTimeBlock = useSetRecoilState(groupSelectedTimeBlockList)
  const router = useRouter()


  const setAvailableTimeInfoForm = (input: Partial<AvailableTimeInfo>) => {
    setAvailableTimeInfo({ ...availableTimeInfo, ...input })
    console.log('setAvailableTimeInfoForm', input)
  }

  // 멤버가 선택한 시간들을 블록으로 묶기
  const groupConsecutiveNumbers = (blocks: number[]) => {
    if (blocks.length === 0) return []
    blocks.sort((a, b) => a - b); // 숫자 배열을 오름차순으로 정렬

    let result = []
    let temp = [blocks[0]]
    for (let i = 1; i < blocks.length; i++) {
      if (blocks[i] - blocks[i - 1] === 1) { // 현재 숫자와 이전 숫자가 연속된 경우
        temp.push(blocks[i]);
      } else { // 연속되지 않는 경우, 이전까지 묶인 숫자들을 결과 배열에 추가하고 새로운 묶음 시작
        result.push(temp);
        temp = [blocks[i]];
      }
    }

    result.push(temp); // 마지막 묶음을 결과 배열에 추가
    return result
  }

  const handleBackBtnClick = () => {
    // 전 step으로 가도록
    if (step === 0) {
      router.push('/')
    } else {
      setStep(step - 1)
      console.log('handleBackBtnClick step', step)
    }
  }

  const handleBtnClick = async () => {
    // step + 1 되도록
    if (step >= 6) {
      // 마지막 step에서 누를 경우
      // 1. 서버로 데이터 전송
      // 2. '/'로 이동
      router.push('/')
      console.log('handleBtnClick step', step)
    } else if (step === 1){
      const blocks = [...selectedTimeBlock]
      const groupList = groupConsecutiveNumbers(blocks); // 동기적으로 호출
      setGroupSelectedTimeBlock(groupList)
      setStep(step + 1)
    } else {
      setStep(step + 1)
      console.log('handleBtnClick step', step)
    }
  }

  return { step, availableTimeInfo, setAvailableTimeInfoForm, handleBackBtnClick, handleBtnClick }
}