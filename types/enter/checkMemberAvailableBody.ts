export interface CheckMemberAvailableRequest {
  name: string
  availableTimeList: number[][]
  priorities: number[]
}
export interface CheckMemberAvailableResponse {
  id: string
  name: string
  startTime: string
  endTime: string
  priority: number
}