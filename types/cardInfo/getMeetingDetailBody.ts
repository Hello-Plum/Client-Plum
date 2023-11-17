
export interface GetMeetingDetailResponse {
  id: string
  name: string
  startDate: string
  endDate: string
  place: string
  placeDetail: string
  host: string
  password: string
  info: string
  confirmed: boolean
  period: true
  selectedWeek: Array<number>
}