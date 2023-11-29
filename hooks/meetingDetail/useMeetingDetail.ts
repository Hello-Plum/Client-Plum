import { useEffect, useState } from "react";
import { getMeetingDetail } from "../../api/meetingDetailApi";
import { Detail } from "../../types/cardInfo/showInfoInterface";
import { hostSelectedAvailableWeekState } from "../../states/atom";
import { useSetRecoilState } from "recoil";

export const useMeetingDetail = (meetingId: string | string[] | undefined) => {
  const [isLoading, setIsLoading] = useState(true)
  const [detail, setDetail] = useState<Detail>()
  const setSelectedWeek = useSetRecoilState(hostSelectedAvailableWeekState)
  
  const meetingDetail = async () => {
    try {
      setIsLoading(true)
      const { data } = await getMeetingDetail(meetingId);
      setDetail(data)
      setSelectedWeek(data?.selectedWeek)
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