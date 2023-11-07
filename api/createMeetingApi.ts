import { client } from ".";
import { BasicResponse } from "../types/AxiosResponse";
import { GetMeetingDetailResponse } from "../types/cardInfo/getMeetingDetailBody";
import { CreateMeetingRequest, CreateMeetingResponse } from "../types/create/createMeetingBody";

export const postCreateMeeting = async (createMeetingRequest: CreateMeetingRequest) => {
  const { data } = await client.post<BasicResponse<CreateMeetingResponse>>(`/meeting`, createMeetingRequest);
  return data
}

//id: "653000f65b93ad7cabd3fe56"
export const getMeetingDetail = async (id: string | string[] | undefined) => {
  const { data } = await client.get<BasicResponse<GetMeetingDetailResponse>>(`/meeting/${id}`);
  return data
}