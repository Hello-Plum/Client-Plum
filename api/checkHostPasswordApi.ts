import { client } from '.'
import { BasicResponse } from '../types/AxiosResponse'
import { CheckHostPasswordRequest, CheckHostPasswordResponse } from '../types/enter/checkHostPasswordBody'

export const postCheckHostPassword = async (meetingId: string | string[] | undefined, checkHostPasswordRequest: CheckHostPasswordRequest) => {
  const { data } =  await client.post<BasicResponse<CheckHostPasswordResponse>>(`/meeting/${meetingId}/owner`, checkHostPasswordRequest)
  return data
}