import { useState } from 'react'
import { ProjectDetail } from './ProjectDetail'
import s from './ProjectsList.module.scss'
interface Project {
  id: string
  name: string
}
export const ProjectsList: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      name: 'http://localhost:3000/',
    },
    {
      id: '2',
      name: 'http://localhost:4000/',
    },
    {
      id: '3',
      name: 'http://localhost:5000/',
    },
    {
      id: '4',
      name: 'http://localhost:6000/',
    },
  ])
  const [projectVisible, setProjectVisible] = useState<boolean>(false)
  const openProjectDetail = () => {
    setProjectVisible(true)
  }
  const onBack = () => {
    setProjectVisible(false)
  }
  return (
    <>
      {!projectVisible
        ? <div className={s.wrapper}>
          <h3>项目列表</h3>
          <ul>
            {projects.map(project => (
              <li key={project.id} onClick={openProjectDetail}>{project.name}</li>
            ))}
          </ul>
        </div>
        : <ProjectDetail onBack={onBack} />}
    </>
  )
}
