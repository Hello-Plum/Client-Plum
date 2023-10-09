import { useRecoilState, useRecoilValue } from 'recoil'
import { createMeetingStepState, meetingInfoState } from '../../states/atom'
import { useRouter } from 'next/router'
import { MeetingInfo } from '../../types/create/createMeetingInterface'

export const useCreateMeeting = () => {
  const [step, setStep] = useRecoilState(createMeetingStepState)
  const [meetingInfo, setMeetingInfo] = useRecoilState(meetingInfoState)
  const router = useRouter()

  const setMeetingInfoForm = (input: Partial<MeetingInfo>) => {
    setMeetingInfo({ ...meetingInfo, ...input })
    console.log('setMeetingInfoForm', input)
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

  return { step, meetingInfo, setMeetingInfoForm, handleBackBtnClick, handleBtnClick }
}