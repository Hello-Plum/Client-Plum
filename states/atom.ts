import { atom } from 'recoil'
import { MeetingInfo } from '../types/create/createMeetingInterface'
import { AvailableTimeInfo } from '../types/enter/checkMeetingInterface'
import { CheckHostPasswordRequest } from '../types/enter/checkHostPasswordBody'

// 회의 생성하기
export const createMeetingStepState = atom<number>({
  key: 'createMeetingStepState',
  default: 0,
})

export const currentCreateMeetingBtnActivatedState = atom<boolean>({
  key: 'currentCreateMeetingBtnActivatedState',
  default: false,
})

export const meetingInfoState = atom<MeetingInfo>({
  key: 'meetingInfoState',
  default: {
    name: '',
    startDate: '',
    endDate: '',
    place: '',
    placeDetail: '',
    duration: '', 
    host: '',
    password: '',
    info: '' 
  }
})

// 가능한 시간 입력하기
export const checkAvailableTimeState = atom<number>({
  key: 'checkAvailableTimeState',
  default: 0
})

export const checkMemberAvailableBtnActivatedState = atom<boolean>({
  key: 'checkMemberAvailableBtnActivatedState',
  default: false,
})

export const availableTimeInfoState = atom<AvailableTimeInfo>({
  key: 'availableTimeInfoState',
  default: {
    name: '',
    availableTimeList: [],
    priorities: []
  }
})

export const hostSelectedAvailableWeekState = atom<Array<number>>({
  key: 'hostSelectedAvailableWeekState',
  default: []
})

export const isHostSelectedPeriodState = atom<boolean>({
  key: 'isHostSelectedPeriodState',
  default: false
})

export const memberSelectedTimeBlockList = atom<Array<number>>({
  key: 'memberSelectedTimeBlockList',
  default: [],
})

export const priorityListState = atom<Array<number>>({
  key: 'priorityListState',
  default: [],
})

// 회의 확정하기
export const passwordState = atom<CheckHostPasswordRequest>({
  key: 'passwordState',
  default: {
    password: ''
  },
})