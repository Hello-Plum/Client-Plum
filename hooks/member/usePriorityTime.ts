import { useRecoilState, useSetRecoilState } from 'recoil'
import { checkMemberAvailableBtnActivatedState, priorityListState } from '../../states/atom'

export const usePriorityTime = () => {
  const [priorityList, setPriorityList] = useRecoilState(priorityListState)
  const setIsActivated = useSetRecoilState(checkMemberAvailableBtnActivatedState)

  const handlePriority = (e: any) => {
    const clickedTarget = Number(e.target.id)
    let newPriority = []
    let calculatePriority = [...priorityList]

    // 클릭했는데 priorityList 배열에 없으면 넣고 배열 인덱스 보여주기
    // 클릭했는데 priorityList 배열에 있으면 배열에서 빼고 인덱스 없애기
    if (calculatePriority.length === 0) setIsActivated(false)
    if (calculatePriority.length < 3) {
      if (calculatePriority.includes(clickedTarget)) {
        newPriority = calculatePriority.filter((element) => element !== clickedTarget)
        setPriorityList(newPriority)
      } else {
        calculatePriority.push(clickedTarget)
        setPriorityList(calculatePriority)
      }
    } else {
      if (calculatePriority.includes(clickedTarget)) {
        newPriority = calculatePriority.filter((element) => element !== clickedTarget)
        setPriorityList(newPriority)
      } else {
        alert('우선순위는 세개만 선택 가능합니다!')
      }
    }
    setIsActivated(true)
  }

  return { priorityList, setPriorityList, handlePriority }
}
