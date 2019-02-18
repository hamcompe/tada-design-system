import React from 'react'
import styled from '@emotion/styled'
import {keyframes} from '@emotion/core'

const bounce = keyframes`
  to {
    opacity: 0.1;
    transform: translate3d(0, -1rem, 0);
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`
const FirstDot = styled.div`
  width: 1rem;
  height: 1rem;
  margin: 3rem 0.2rem;
  background: #8385aa;
  border-radius: 50%;
  animation: ${bounce} 0.6s infinite alternate;
`
const SecondDot = styled(FirstDot)`
  animation-delay: 0.2s;
`
const ThirdDot = styled(FirstDot)`
  animation-delay: 0.4s;
`

function BounchingLoader() {
  return (
    <Wrapper>
      <FirstDot />
      <SecondDot />
      <ThirdDot />
    </Wrapper>
  )
}

export default BounchingLoader
