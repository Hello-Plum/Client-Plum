import { useRecoilValue } from "recoil"
import { hostSelectedAvailableDayState, isHostSelectedPeriodState } from "../../states/atom"

export const useCheckAvailableTimeTable = () => {
  
  // 호스트가 선택한 요일의 인덱스
  const selectDay = useRecoilValue(hostSelectedAvailableDayState)
  // 호스트가 하루 지정했는지, 기간 지정했는지
  const isPeriod = useRecoilValue(isHostSelectedPeriodState)
  
  const disabledWeekTable = (slotIndex: number, selectDay: number) => {
    if (slotIndex % 7 === selectDay) { // Monday
      return ''
    }
    return ' disabled'
  }

  const handleTimeTableSelect = (e: any) => { 
    console.log('e.selected', e.selected) // 선택한 div 확인용 코드

    e.added.forEach((el: any) => {
      if(Number(el.id) % 7 === selectDay) {
        el.classList.add('selected')
      }
      //el.classList.add('selected')
    })
    e.removed.forEach((el: any) => {
      el.classList.remove('selected')
    })
  }



  return { selectDay, isPeriod, handleTimeTableSelect, disabledWeekTable }
}