import React from 'react'
import PropTypes from 'prop-types'
import {css} from '@emotion/core'
import styled from '@emotion/styled'

const invalidStyleHandler = ({invalid}) =>
  invalid &&
  css`
    border-color: red;

    :hover {
      border-color: rgba(255, 0, 0, 0.6);
    }

    :focus {
      outline: none;
      border-color: rgba(0, 0, 0, 0.8);
    }
  `

const StyledInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 0.5em 1em;
  transition: 0.2s border-color ease;
  display: block;
  position: relative;
  width: 100%;

  :hover {
    border-color: rgba(0, 0, 0, 0.3);
  }
  :focus {
    outline: none;
    border-color: rgba(0, 0, 0, 0.8);
  }

  ::placeholder {
    color: #aaa;
  }

  ${invalidStyleHandler};
`

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;

  ::after {
    content: '${props => props.errorMessage}';
    position: absolute;
    bottom: -1.5em;
    right: 0;
    color: red;
    transition: 0.3s opacity ease;
    opacity: 0;
  }
  ${props =>
    props.invalid &&
    !props.focused &&
    `
    ::after {
      opacity: 1;
    }
  `}
`
const FirstLine = styled.span`
  display: block;
  width: 10px;
  height: 1px;
  background: red;
  transform: translateY(1px) rotate(45deg);
`
const SecondLine = styled.span`
  display: block;
  width: 10px;
  height: 1px;
  background: red;
  transform: translateY(0px) rotate(135deg);
`
const XIconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 0.8em;
  opacity: 0;
  transition: 0.3s opacity ease;

  ${props =>
    props.invalid &&
    !props.focused &&
    `
    opacity: 1;
  `};
`
const XIcon = ({focused, invalid}) => (
  <XIconWrapper focused={focused} invalid={invalid}>
    <FirstLine />
    <SecondLine />
  </XIconWrapper>
)

function Input({
  label,
  invalid,
  errorMessage,
  placeholder,
  children,
  ...props
}) {
  const [focused, setFocus] = React.useState(false)

  return (
    <InputWrapper
      invalid={invalid}
      focused={focused}
      errorMessage={errorMessage}
    >
      <XIcon invalid={invalid} focused={focused} />
      <label htmlFor={label}>{label}</label>
      <StyledInput
        id={label}
        invalid={invalid}
        placeholder={placeholder}
        onFocus={() => {
          setFocus(true)
        }}
        onBlur={() => {
          setFocus(false)
        }}
        {...props}
      >
        {children}
      </StyledInput>
    </InputWrapper>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  invalid: PropTypes.bool,
  errorMessage: PropTypes.string,
}

Input.defaultProps = {
  label: null,
  placeholder: null,
  invalid: false,
  errorMessage: null,
}

export default Input
