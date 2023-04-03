import { useState } from 'react'
interface Project {
  id: string
  name: string
}
export function ProjectsList() {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      name: '项目1',
    },
    {
      id: '2',
      name: '项目2',
    },
  ])
  const [projectVisible, setProjectVisible] = useState<boolean>(false)
  const xxx = () => {
    setProjectVisible(true)
  }
  return (
    <>

      {!projectVisible
        ? <>
          <h3>项目列表</h3><ul>
            {projects.map(project => (
              <li key={project.id} onClick={xxx}>{project.name}</li>
            ))}
          </ul>
        </>
        : <span>详情页面</span>}
    </>
  )
}
