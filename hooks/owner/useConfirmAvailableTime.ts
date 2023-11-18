import { useRouter } from "next/router"
import { useRecoilState } from "recoil"
import { passwordState } from "../../states/atom"

export const useConfirmMeeting = () => {
  const [password, setPassword] = useRecoilState(passwordState)
  const router = useRouter()
  const { meetingId } = router.query

  const handleBackBtnClick = () => {
    router.push(`/enter/${meetingId}`)
  }
  const handleBtnClick = () => {
    // password 비교하는 서버 연결 후, 
    // true 면 확정 페이지로 이동
    router.push(`/enter/owner/${meetingId}`)
    // false 면 안 들어가지도록
    
  }
  const handleConfirmBtnClick = () => {}

  return { setPassword, handleBackBtnClick, handleBtnClick, handleConfirmBtnClick }
}