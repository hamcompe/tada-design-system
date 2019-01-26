import {css} from '@emotion/core'
import colors from 'design/colors'
import {transparentize} from 'polished'

const BlueStyle = css`
  background: ${colors.blue};
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.1),
    0 1px 3px ${transparentize(0.7, colors.blue)};
  color: #fff;

  &:hover {
    color: #fff;
    box-shadow: inset 0 0 0 rgba(0, 0, 0, 0.1),
      0 5px 8px -2px ${transparentize(0.7, colors.blue)};
    background: ${colors.blueHover};
  }
`
const WhiteStyle = css`
  background: #fff;
  color: ${colors.text};
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.03), 0 2px 3px rgba(0, 0, 0, 0.1);

  &:hover {
    color: ${colors.text};
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.01), 0 5px 8px -2px rgba(0, 0, 0, 0.1);
    color: ${colors.blue};
  }
`
const ColorMap = {
  blue: BlueStyle,
  white: WhiteStyle,
}

const InlineBlockStyle = css`
  display: inline-block;
`
const BlockStyle = css`
  display: block;
  width: 100%;
  margin-top: 8px;
`
const SizeMap = {
  block: BlockStyle,
  'inline-block': InlineBlockStyle,
}
export const ButtonStyle = ({color, size}) => css`
  ${SizeMap[size]};
  min-width: 100px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
  border: none;
  text-align: center;
  padding: 12px 24px;

  transition: all 0.3s ease;
  cursor: pointer;

  ${ColorMap[color]};

  &:active {
    transform: scale(0.98);
  }
`
