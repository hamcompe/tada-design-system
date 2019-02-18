import React from 'react'
import styled from '@emotion/styled'
import {keyframes} from '@emotion/core'

const donutSpin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const DonutSpinner = styled.div`
  display: inline-block;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #7983ff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${donutSpin} 1.2s linear infinite;
`

export default DonutSpinner
