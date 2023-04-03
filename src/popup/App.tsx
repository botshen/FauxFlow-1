import { styled } from '@linaria/react'
import { ProjectsList } from '../pages/projectsList'

const Container = styled.div`
  border: 1px solid purple;
  width: 800px;
  height: 600px;
`
function App() {
  return (
    <Container>
      <h3>项目列表</h3>
      <ProjectsList />
    </Container>
  )
}

export default App
