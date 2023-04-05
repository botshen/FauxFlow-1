import { useState } from 'react'
import { ApiLog } from './ApiLog'
import { ApiList } from './ApiList'
import { ApiDetail } from './ApiDetail'
import s from './ProjectDetail.module.scss'
interface Props {
  onBack: (visible: boolean) => void
}
export const ProjectDetail: React.FC<Props> = (prop) => {
  const [apiDetailVisible, setApiDetailVisible] = useState<boolean>(false)
  const handleOpenApiDetail = () => {
    setApiDetailVisible(true)
  }
  const handleCloseApiDetail = () => {
    setApiDetailVisible(false)
  }
  const onBack = () => {
    prop.onBack(false)
  }
  return (
    <div className={s.wrapper}>

      {
        apiDetailVisible
          ? <ApiDetail onBack={handleCloseApiDetail} />
          : <>
            <button onClick={onBack}>返回</button>
            <ApiList openApiDetail={handleOpenApiDetail} />
            <ApiLog />
          </>
      }
    </div>
  )
}
