import { styled } from '@linaria/react'
import { NextUIProvider } from '@nextui-org/react'
import { ProjectsList } from '../pages/projectsList'

const Container = styled.div`
  border: 1px solid purple;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height:100vh;
`
function App() {
  return (
    <NextUIProvider>
      <Container>
        <ProjectsList />
      </Container>
    </NextUIProvider>
  )
}

export default App
