import { atom } from 'recoil'
import { MeetingInfo } from '../types/create/createMeetingInterface'

export const createMeetingStepState = atom<number>({
  key: 'createMeetingStepState',
  default: 0
})

export const currentStepState = atom<string>({
  key: 'currentStepState',
  default: ''
})

export const meetingInfoState = atom<MeetingInfo>({
  key: 'meetingInfoState',
  default: {
    title: '',
    availableDates: [],
    place: '',
    placeDetail: '',
    duration: '',
    name: '',
    password: '',
    additionalInfo: '' 
  }
})