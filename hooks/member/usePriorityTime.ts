import { useRecoilState } from "recoil"
import { groupSelectedTimeBlockList } from "../../states/atom"

export const usePriorityTime = () => {
  const [groupSelectedTimeBlock, setGroupSelectedTimeBlock] = useRecoilState(groupSelectedTimeBlockList)

  

  return { groupSelectedTimeBlock }
}