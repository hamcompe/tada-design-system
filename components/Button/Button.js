import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import {ButtonStyle} from './style'

const StyledButton = styled.button`
  ${ButtonStyle};
`

function Button({color, type, size, children}) {
  return (
    <StyledButton type={type} color={color} size={size}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  color: PropTypes.oneOf(['blue', 'white']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  size: PropTypes.oneOf(['block', 'inline-block']),
}

Button.defaultProps = {
  color: 'blue',
  type: 'button',
  size: 'inline-block',
}

export default Button
