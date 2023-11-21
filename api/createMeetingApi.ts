import { client } from ".";
import { BasicResponse } from "../types/AxiosResponse"
import { CreateMeetingRequest, CreateMeetingResponse } from "../types/create/createMeetingBody"

export const postCreateMeeting = async (createMeetingRequest: CreateMeetingRequest) => {
  const { data } = await client.post<BasicResponse<CreateMeetingResponse>>(`/meeting`, createMeetingRequest)
  return data
}