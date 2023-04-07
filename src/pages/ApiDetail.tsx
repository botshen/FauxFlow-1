import s from './ApiDetail.module.scss'
import { ApiEdit } from './ApiEdit'
import { ApiJsonEdit } from './ApiJsonEdit'

interface Props {
  onBack: (visible: boolean) => void
}
export const ApiDetail: React.FC<Props> = (prop) => {
  return (
    <div className={s.wrapper}>
      <ApiEdit />
      <ApiJsonEdit/>
    </div>
  )
}
