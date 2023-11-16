import { atom } from 'recoil'
import { MeetingInfo } from '../types/create/createMeetingInterface'
import { AvailableTimeInfo } from '../types/enter/checkMeetingInterface'

// 회의 생성하기
export const createMeetingStepState = atom<number>({
  key: 'createMeetingStepState',
  default: 0,
})

export const currentActivatedState = atom<boolean>({
  key: 'currentActivatedState',
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

export const availableTimeInfoState = atom<AvailableTimeInfo>({
  key: 'availableTimeInfoState',
  default: {
    name: '',
    availableTimeList: [],
    priorities: []
  }
})

export const hostSelectedAvailableDayState = atom<number>({
  key: 'hostSelectedAvailableDayState',
  default: 0
})

export const isHostSelectedPeriodState = atom<boolean>({
  key: 'isHostSelectedPeriodState',
  default: false
})

export const memberSelectedTimeBlockList = atom<Array<number>>({
  key: 'memberSelectedTimeBlockList',
  default: [],
})

export const groupSelectedTimeBlockList = atom<number[][]>({
  key: 'groupSelectedTimeBlockList',
  default: [[0]],
})