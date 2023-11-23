import { useRouter } from "next/router"
import { useRecoilState } from "recoil"
import { passwordState } from "../../states/atom"
import { postCheckHostPassword } from "../../api/checkHostPasswordApi"

export const useConfirmMeeting = () => {
  const [password, setPassword] = useRecoilState(passwordState)
  const router = useRouter()
  const { meetingId } = router.query

  const handleBackBtnClick = () => {
    router.push(`/enter/${meetingId}`)
  }
  const handleBtnClick = async () => {
    const check = await checkHostPassword()
    if (check) router.push(`/enter/owner/${meetingId}`)
    else alert('비밀번호를 잘못 입력했습니다. 다시 입력해주세요!')  
  }

  const checkHostPassword = async () => {
    try {
      const { data } = await postCheckHostPassword(meetingId, password)
      console.log('check', data?.check)
      return data?.check
    } catch (error) {
      console.log('[ERROR] checkHostPassword error', error)
    }
    
  }
  const handleConfirmBtnClick = () => {}

  return { setPassword, handleBackBtnClick, handleBtnClick, handleConfirmBtnClick }
}