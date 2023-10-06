import TitleComponent from "../../components/modules/TitleComponent"

interface CreateMeetingSteps {
  [key: string]: {
    title: string
    subTitle: string
  }
}

const createMeetingSteps: CreateMeetingSteps = {
  title: {
    title: '어떤 회의를 계획 중인가요?',
    subTitle: '회의 이름을 지어주세요 (최대 15자)'
  },
  availableDates: {
    title: '고려 중인 회의 날짜는 언제인가요?',
    subTitle: '날짜 혹은 기간을 지정해주세요'
  },
  place: {
    title: '회의 장소를 입력해주세요',
    subTitle: '회의 방식과 장소를 알려주세요'
  },
  duration: {
    title: '회의는 몇 시간 동안 진행되나요?',
    subTitle: '예정된 회의 시간을 선택해주세요?'
  },
  hostInfo: {
    title: '방장 정보를 입력해주세요',
    subTitle: '다시 접속할 때 필요하니 반드시 기억해주세요!'
  },
  additionalInfo: {
    title:'더 알리고 싶은 내용이 있나요?',
    subTitle: '큐카드에 아래 내용을 함께 적어드려요'
  }
}

interface CreateMeetingTitleProps {
  step: string
}

export default function CreateMeetingTitleComponent({ step }: CreateMeetingTitleProps) {
  const currentStep = createMeetingSteps[step]
  
  return (
    <TitleComponent title={currentStep.title} subTitle={currentStep.subTitle} />
  )
}