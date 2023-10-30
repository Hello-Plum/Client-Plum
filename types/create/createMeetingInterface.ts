/*
- 회의명
- 일정 선택
    1. 기간 지정 (최대 7일)
    2. 날짜 지정 (하루) → startDate와 endDate 같게
- 회의장소
    - 온라인 → [선택] 화상회의 툴 선택 옵션
    - 오프라인 → 의 주소지 입력
    - 미정
- 회의 진행 시간 선택
  → 30분 / 1시간 / 1시간 30분 / 2시간 / 2시간 30분 / 3시간
- 방장 정보 
  1. 방장이름
  2. 방 비밀번호 (비밀번호의 경우, 수정 불가 + 비밀번호가 있어야 방장 페이지 접속가능)
- 회의 정보 입력
  → 최대 50자로 회의 안건, 준비물 등 회의와 관련하여 알리고 싶은 내용을 적어주기
 */
export interface MeetingInfo {
  name: string
  startDate: string
  endDate: string
  place: string
  placeDetail: string
  host: string
  password: string
  info: string
}

export interface StepProps{
  meetingInfo: MeetingInfo
  setMeetingInfo: (input: Partial<MeetingInfo>) => void
}