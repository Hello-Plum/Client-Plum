export interface CheckMemberAvailableRequest {
  name: string
  availableTimes: AvailableTimes[]
  priorities: number[]
}

export type AvailableTimes = {
  startTimeIdx: number
  endTimeIdx: number
}

export interface CheckMemberAvailableResponse {
  id: string
  name: string
  startTime: string
  endTime: string
  priority: number
}