import { useEffect, useState } from "react";
import { getMeetingDetail } from "../../api/meetingDetailApi";

interface Detail {
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
  period: boolean
  selectedWeek: Array<number>
}

export const useMeetingDetail = (meetingId: string | string[] | undefined) => {
  const [isLoading, setIsLoading] = useState(true)
  const [detail, setDetail] = useState<Detail>()
  
  const meetingDetail = async () => {
    try {
      setIsLoading(true)
      const { data } = await getMeetingDetail(meetingId);
      setDetail(data)
    } catch (error) {
      setIsLoading(true)
      console.log('[ERROR] getMeetingDetail error', error)
    } 
    setIsLoading(false)
  }

  useEffect(() => {
    meetingDetail()
  }, [meetingId])

  return { isLoading, detail };
}