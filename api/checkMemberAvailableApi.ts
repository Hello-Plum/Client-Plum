import { client } from '.'
import { BasicResponse } from '../types/AxiosResponse'
import { CheckMemberAvailableRequest, CheckMemberAvailableResponse } from '../types/enter/checkMemberAvailableBody'

export const postCheckMemberAvailable = async (meetingId: string | string[] | undefined, checkMemberAvailableRequest: CheckMemberAvailableRequest) => {
  const { data } =  await client.post<BasicResponse<CheckMemberAvailableResponse>>(`/meeting/${meetingId}/time`, checkMemberAvailableRequest)
  return data
}