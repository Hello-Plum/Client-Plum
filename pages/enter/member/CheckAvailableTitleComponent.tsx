import TitleComponent from "../../../components/modules/TitleComponent";

interface CheckAvailableTimeSteps {
  [key: string]: {
    title: string
    subTitle: string
  }
}

const checkAvailableTimeSteps : CheckAvailableTimeSteps = {
  name: {
    title: '참여자의 이름을 알려주세요',
    subTitle: '정확한 일정 조율을 위해 실명입력을 추천드려요'
  },
  availableTimeTable: {
    title: '가능한 시간을 알려주세요',
    subTitle: '아래 시간표에 가능한 시간을 선택해주세요'
  },
  priority: {
    title: '우선 순위를 입력해주세요',
    subTitle: '최대 3개까지 선택가능해요'
  },
  end: {
    title: '선택 완료',
    subTitle: '회의 시간이 정해지면 연락드릴게요'
  }
}

interface CheckAvailableTimeProps {
  step: string
}

export default function CheckAvailableTitleComponent({ step }: CheckAvailableTimeProps) {
  const currentStep = checkAvailableTimeSteps[step]
  
  return (
    <TitleComponent title={currentStep.title} subTitle={currentStep.subTitle} />
  )
}