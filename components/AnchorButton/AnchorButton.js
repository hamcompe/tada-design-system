import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import {ButtonStyle} from '../Button/style'

const StyledAnchor = styled.a`
  ${ButtonStyle};
`

function AnchorButton({color, size, children, ...options}) {
  return (
    <StyledAnchor color={color} role="button" size={size} {...options}>
      {children}
    </StyledAnchor>
  )
}

AnchorButton.propTypes = {
  href: PropTypes.string,
  color: PropTypes.oneOf(['blue', 'white']),
  size: PropTypes.oneOf(['block', 'inline-block']),
}

AnchorButton.defaultProps = {
  color: 'blue',
  size: 'inline-block',
}

export default AnchorButton
