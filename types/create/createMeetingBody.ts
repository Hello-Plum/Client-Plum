export interface CreateMeetingRequest {
  name: string
  startDate: string
  endDate: string
  place: string
  placeDetail: string
  duration: string
  host: string
  password: string
  info: string
}

export interface CreateMeetingResponse {
  id: string//"653000f65b93ad7cabd3fe56"
}