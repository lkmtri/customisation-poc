import React from 'react'
import styled from 'styled-components'
import BasicInputType from 'decorators/BasicInputType'
import { InputTypeContainer } from 'components/shared/Containers'
import { Label } from 'components/shared/Typo'

const RangeInputContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5px;
`

const RangeInputBar = styled.div`
  position: relative;
  height: 10px;
  border-radius: 5px;
  background: white;
  flex: 1;
`

const RangeInputSlider = styled.div`
  position: absolute;
  top: -3px;
  left: ${props => props.left ? `${props.left}px` : 0};
  height: 16px;
  width: 16px;
  border-radius: 8px;
  background: white;
  border: 1px #777 solid;
  cursor: pointer;
  transform: translateX(-50%);
  transition: left 100ms ease-in-out;
`

const RangeValue = styled.div`
  width: 20px;
`

class RangeInput extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      intervalNum: (props.max - props.min) / props.step,
      value: props.defaultValue,
      shouldTrackMouse: false,
      mouseX: 0
    }
  }

  componentDidMount () {
    if (window !== undefined) {
      document.addEventListener('mouseup', this.untrackMousePosition)
    }
  }

  componentWillUnmount () {
    if (window !== undefined) {
      document.removeEventListener('mouseup', this.untrackMousePosition)
    }
  }

  onMouseDown = ({ clientX, clientY }) => {
    this.setState({ shouldTrackMouse: true })
    document.addEventListener('mousemove', this.trackMousePosition)
  }

  untrackMousePosition = () => {
    document.removeEventListener('mousemove', this.trackMousePosition)
    this.setState(
      (state) => ({
        ...state,
        shouldTrackMouse: false,
        mouseX: 0
      }),
      () => this.props.onChange(this.state.value)
    )
  }

  trackMousePosition = ({ clientX }) => {
    const { min, max } = this.props
    const { left: inputBarLeft, right: inputBarRight } = this._inputBar.getBoundingClientRect()
    const stepLength = (inputBarRight - inputBarLeft) / this.state.intervalNum
    const stepNum = (clientX - inputBarLeft) / stepLength
    const value = min + stepNum > max ? max : parseInt(min + stepNum)
    this.setState({
      mouseX: clientX,
      sliderLeft: (value - min) * stepLength,
      value
    })
  }

  render () {
    const { value, sliderLeft } = this.state

    return (
      <RangeInputContainer>
        <RangeInputBar innerRef={e => { this._inputBar = e }}>
          <RangeInputSlider left={sliderLeft} onMouseDown={this.onMouseDown} />
        </RangeInputBar>
        <RangeValue>{value}</RangeValue>
      </RangeInputContainer>
    )
  }
}

class Range extends React.PureComponent {
  render () {
    const { label, default: defaultValue, min, max, step, onChange, unit } = this.props

    return (
      <InputTypeContainer>
        <Label>{label}</Label>
        <RangeInput
          defaultValue={defaultValue}
          onChange={onChange}
          min={min}
          max={max}
          step={step}
          unit={unit}
        />
      </InputTypeContainer>
    )
  }
}

export default BasicInputType(Range)
