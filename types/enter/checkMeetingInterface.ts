import { Detail } from "../cardInfo/showInfoInterface"

export interface MeetingProps {
  meetingId: string
}

export interface AvailableTimeInfo {
  name: string // 참여자 이름
  availableTimeList: number[] //가능한 기간
  priorities: number[] //우선순위
}

export interface StepProps{
  meetingDetail: Detail
  availableTimeInfo: AvailableTimeInfo
  setAvailableTimeInfo: (input: Partial<AvailableTimeInfo>) => void
}