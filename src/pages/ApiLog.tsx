import s from './ApiLog.module.scss'

interface Project {
  id: string
  name: string
}

export const ApiLog: React.FC = () => {
  return (
        <div className={s.wrapper}>
          apiLog
        </div>
  )
}
