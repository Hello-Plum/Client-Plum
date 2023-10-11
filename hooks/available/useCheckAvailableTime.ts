import { useRecoilState } from "recoil"
import { availableTimeInfoState, checkAvailableTimeState } from "../../states/atom"
import { useRouter } from "next/navigation"
import { AvailableTimeInfo } from "../../types/enter/checkMeetingInterface"

export const useCheckAvailableTime = () => {
  const [step, setStep] = useRecoilState(checkAvailableTimeState)
  const [availableTimeInfo, setAvailableTimeInfo] = useRecoilState(availableTimeInfoState)
  const router = useRouter()

  const setAvailableTimeInfoForm = (input: Partial<AvailableTimeInfo>) => {
    setAvailableTimeInfo({ ...availableTimeInfo, ...input })
    console.log('setAvailableTimeInfoForm', input)
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

  const handleBtnClick = () => {
    // step + 1 되도록
    if (step >= 6) {
      // 마지막 step에서 누를 경우
      // 1. 서버로 데이터 전송
      // 2. '/'로 이동
      router.push('/')
    } else {
      setStep(step + 1)
      console.log('handleBtnClick step', step)
    }
  }

  return { step, availableTimeInfo, setAvailableTimeInfoForm, handleBackBtnClick, handleBtnClick }
}