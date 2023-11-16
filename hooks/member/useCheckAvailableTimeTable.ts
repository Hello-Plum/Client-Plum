import { useRecoilValue, useSetRecoilState } from "recoil"
import { hostSelectedAvailableDayState, isHostSelectedPeriodState, memberSelectedTimeBlockList } from "../../states/atom"

export const useCheckAvailableTimeTable = () => {
  
  // 호스트가 선택한 요일의 인덱스
  const selectDay = useRecoilValue(hostSelectedAvailableDayState)
  // 호스트가 하루 지정했는지, 기간 지정했는지
  const isPeriod = useRecoilValue(isHostSelectedPeriodState)
  // 멤버가 선택한 시간 블록 저장 리스트
  const setSelectedTimeBlock = useSetRecoilState(memberSelectedTimeBlockList)

  const timeBlock = []
  
  const disabledWeekTable = (slotIndex: number, selectDay: number) => {
    if (slotIndex % 7 === selectDay) { // Monday
      return ''
    }
    return ' disabled'
  }

  const handleTimeTableSelect = (e: any) => { 
    const blocks = e.selected.map((block: any) => Math.floor(block.id / 7))
    setSelectedTimeBlock(blocks)

    e.added.forEach((el: any) => {
      if(Number(el.id) % 7 === selectDay) {
        el.classList.add('selected')
      }
    })
    e.removed.forEach((el: any) => {
      el.classList.remove('selected')
    })
  }

  

  return { selectDay, isPeriod, handleTimeTableSelect, disabledWeekTable }
}