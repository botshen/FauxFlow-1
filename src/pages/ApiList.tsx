import { useState } from 'react'
import s from './ApiList.module.scss'

interface ApiDetail {
  id: string
  name: string
}
interface ApiListProps {
  openApiDetail: (apiId: string) => void
}

export const ApiList: React.FC<ApiListProps> = (prop) => {
  const [apiList, setApiList] = useState<ApiDetail[]>([
    {
      id: '1',
      name: 'http://localhost:3000/xxx',
    },
    {
      id: '2',
      name: 'http://localhost:4000/xxx',
    },
    {
      id: '3',
      name: 'http://localhost:5000/xxx',
    },
    {
      id: '4',
      name: 'http://localhost:6000/xxx',
    },
  ])
  const handleOpenApiDetail = (id: string) => {
    prop.openApiDetail(id)
  }
  return (
    <div className={s.wrapper}>
      <ul>
        {apiList.map(api => (
          <li key={api.id} onClick={() => handleOpenApiDetail(api.id)}>
            {api.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
