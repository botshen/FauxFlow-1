import { useState } from 'react'
import { Button, Tooltip } from 'antd'
import { EditOutlined, RollbackOutlined, SnippetsOutlined } from '@ant-design/icons'
import { ApiLog } from './ApiLog'
import { ApiList } from './ApiList'
import { ApiDetail } from './ApiDetail'
import s from './ProjectDetail.module.scss'

export const ProjectDetail: React.FC = () => {
  const [apiDetailVisible, setApiDetailVisible] = useState<boolean>(false)
  const [apiApiListVisible, setApiListVisible] = useState<boolean>(false)

  const handleOpenApiDetail = () => {
    setApiDetailVisible(true)
  }
  const handleCloseApiDetail = () => {
    setApiDetailVisible(false)
  }
  const handleBack = () => {

  }
  const handleOpenSavedApis = () => {
    setApiListVisible(() => true)
  }
  const handleOpenApisDetail = () => {
    setApiDetailVisible(() => true)
  }
  return (
    <div className={s.wrapper}>
      <header>
        {
          apiApiListVisible && <Tooltip title="返回">
            <Button type="primary" shape="circle" icon={<RollbackOutlined />}
              onClick={() => setApiListVisible(() => false)}
            />
          </Tooltip>
        }
        {
          apiDetailVisible && <Tooltip title="返回">
            <Button type="primary" shape="circle" icon={<RollbackOutlined />}
              onClick={() => setApiDetailVisible(() => false)}
            />
          </Tooltip>
        }
        <Tooltip title="查看保存的接口">
          <Button type="primary" shape="circle" icon={<EditOutlined />}
            onClick={handleOpenSavedApis}
          />
        </Tooltip>
        <Tooltip title="接口详情">
          <Button type="primary" shape="circle" icon={<SnippetsOutlined />}
            onClick={handleOpenApisDetail}
          />
        </Tooltip>
      </header>
      <ApiLog />
      {
        apiApiListVisible && (
          <div className={s.apiDetail}>
            <ApiList openApiDetail={handleOpenApiDetail} />
          </div>
        )
      }
      {
        apiDetailVisible && (
          <div className={s.apiDetail}>
            <ApiDetail onBack={handleCloseApiDetail} />
          </div>
        )
      }
    </div>
  )
}
