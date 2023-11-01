import { useRecoilState } from 'recoil'
import { createMeetingStepState, currentActivatedState, meetingInfoState } from '../../states/atom'
import { useRouter } from 'next/navigation'
import { MeetingInfo } from '../../types/create/createMeetingInterface'
import { postCreateMeeting } from '../../api/createMeetingApi'

export const useCreateMeeting = () => {
  const [step, setStep] = useRecoilState(createMeetingStepState)
  const [meetingInfo, setMeetingInfo] = useRecoilState(meetingInfoState)
  const [isActivated, setIsActivated] = useRecoilState(currentActivatedState)
  const router = useRouter()

  const setMeetingInfoForm = (input: Partial<MeetingInfo>) => {
    console.log('input', input)
    setMeetingInfo({ ...meetingInfo, ...input })
    if (input.name && input.name.length < 16) setIsActivated(true)
    else if (input.startDate && input.endDate) setIsActivated(true)
    else if (input.place) setIsActivated(true)
    else if (input.placeDetail || !input.placeDetail) setIsActivated(true)
    else if (input.host && input.password) setIsActivated(true)
    else if (input.info) setIsActivated(true)
    else setIsActivated(false)
  }

  const handleBackBtnClick = () => {
    if (step === 0) {
      router.push('/')
    } else {
      setStep(step - 1)
    }
  }

  const handleBtnClick = () => { // step : 0~4
    /** switch-case */
    switch (step) {
      case 0:
        setStep(step+1)
        setIsActivated(false)
        break
      case 1:
        setStep(step+1)
        setIsActivated(false)
        break
      case 2:
        setStep(step+1)
        setIsActivated(false)
        break
      case 3:
        setStep(step+1)
        setIsActivated(false)
        break
      case 4:
        createMeeting()
        break
    }
    /*
    if (step === 0 || step === 1 || step === 2 || step === 3) {
      setStep(step+1)
    } else if (step === 4) {
      createMeeting()
    }
    */
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

  return { step, isActivated, meetingInfo, setMeetingInfoForm, handleBackBtnClick, handleBtnClick }
}