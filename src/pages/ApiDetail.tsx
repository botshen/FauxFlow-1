import s from './ApiDetail.module.scss'

interface Props {
  onBack: (visible: boolean) => void
}
export const ApiDetail: React.FC<Props> = (prop) => {
  const onBack = () => {
    prop.onBack(false)
  }
  return (
    <div className={s.wrapper}>
      <button onClick={onBack}>返回</button>
      apiDetail
    </div>
  )
}