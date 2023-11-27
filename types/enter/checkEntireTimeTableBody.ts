export interface CheckEntireTimeTableResponse {
  id: string
  name: string
  startTime: string
  endTime: string
  startTimeIdx: number
  endTimeIdx: number
  priority: number
}

export interface BasicResponse {
  statue: number
  message: string
  data: CheckEntireTimeTableResponse[]
}