import { useRecoilState } from 'recoil'
import { createMeetingStepState, meetingInfoState } from '../../states/atom'
import { useRouter } from 'next/navigation'
import { MeetingInfo } from '../../types/create/createMeetingInterface'
import { postCreateMeeting } from '../../api/createMeetingApi'

export const useCreateMeeting = () => {
  const [step, setStep] = useRecoilState(createMeetingStepState)
  const [meetingInfo, setMeetingInfo] = useRecoilState(meetingInfoState)
  const router = useRouter()

  const setMeetingInfoForm = (input: Partial<MeetingInfo>) => {
    setMeetingInfo({ ...meetingInfo, ...input })
    console.log('setMeetingInfoForm', input)
  }

  const handleBackBtnClick = () => {
    if (step === 0) {
      router.push('/')
    } else {
      setStep(step - 1)
      //console.log('handleBackBtnClick step', step)
    }
  }
  const handleBtnClick = () => { // step : 0~4
    if (step === 0 || step === 1 || step === 2 || step === 3) {
      setStep(step+1)
      console.log('handleBtnClick step', step)
    } else if (step === 4) {
      console.log('handleBtnClick post server')
      createMeeting()
    }      
  }

  const createMeeting = async () => {
    try {
      const { data } = await postCreateMeeting(meetingInfo)
      console.log('id', data?.id)
      router.push('/meetingInfo')

    } catch (error) {
      console.log('[ERROR] createMeeting error', error)
    }
  }

  return { step, meetingInfo, setMeetingInfoForm, handleBackBtnClick, handleBtnClick }
}