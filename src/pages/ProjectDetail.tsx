import s from './ProjectDetail.module.scss'

interface Project {
  id: string
  name: string
}

export const ProjectDetail: React.FC = () => {
  return (
        <div className={s.wrapper}>
          <div className={s.apiList}></div>
          <div className={s.apiDetail}></div>
        </div>
  )
}
