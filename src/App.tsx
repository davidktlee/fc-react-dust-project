import React from 'react'
import Router from './components/routes/Router'
import Nav from './components/Nav/Nav'
import styled from 'styled-components'

const Container = styled.div`
  height: 590px;
`

function App() {
  return (
    <Container className="App">
      <Router />
      <Nav />
    </Container>
  )
}

export default App
