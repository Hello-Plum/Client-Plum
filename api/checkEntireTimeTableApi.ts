import { client } from ".";
import { BasicResponse } from "../types/enter/checkEntireTimeTableBody";

//id: "653000f65b93ad7cabd3fe56"
export const getEntireTimeTable = async (id: string | string[] | undefined) => {
  const { data } = await client.get<BasicResponse>(`/meeting/${id}/time`);
  return data
}