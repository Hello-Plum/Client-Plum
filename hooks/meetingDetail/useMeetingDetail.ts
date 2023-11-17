import { useEffect, useState } from "react";
import { getMeetingDetail } from "../../api/meetingDetailApi";
import { Detail } from "../../types/cardInfo/showInfoInterface";

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