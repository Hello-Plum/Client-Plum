import { useRecoilState } from "recoil"
import { groupSelectedTimeBlockList, priorityListState } from "../../states/atom"

export const usePriorityTime = () => {
  const [groupSelectedTimeBlock, setGroupSelectedTimeBlock] = useRecoilState(groupSelectedTimeBlockList)
  const [priorities, setPriorities] = useRecoilState(priorityListState)

  const handlePriority = (e: any) => {
    const gropList = [...groupSelectedTimeBlock]
    gropList.forEach((group, i) => {
      if (group.includes(Number(e.target.id))) {
        setPriorities((prevState) => [...prevState, group])
      }
    })
  }

  return { groupSelectedTimeBlock, priorities, handlePriority }
}