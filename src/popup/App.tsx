import { useState } from 'react'
import { ProjectDetail } from '../pages/ProjectDetail'

function App() {
  const [projectVisible, setProjectVisible] = useState<boolean>(false)

  const onBack = () => {
    setProjectVisible(false)
  }
  return (
    <ProjectDetail onBack={onBack} />
  )
}

export default App
