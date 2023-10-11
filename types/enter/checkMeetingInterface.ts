export interface MeetingProps {
  meetingId: string
}

export interface AvailableTimeInfo {
  name: string // 참여자 이름
  availableDates: string[] //가능한 기간
  priorities: string[] //우선순위

}

export interface StepProps{
  availableTimeInfo: AvailableTimeInfo
  setAvailableTimeInfo: (input: Partial<AvailableTimeInfo>) => void
}