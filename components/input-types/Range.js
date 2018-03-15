import React from 'react'
import styled from 'styled-components'
import BasicInputType from 'decorators/BasicInputType'
import { InputTypeContainer } from 'components/shared/Containers'
import { Label } from 'components/shared/Typo'

const RangeInputContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
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
  width: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  color: #ddd;
`

const RangeValueInput = styled.input`
  width: 30px;
  margin-right: 2px;
  border: none;
  &:focus {
    outline: none;
  }
`

class RangeInput extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      intervalNum: (props.max - props.min) / props.step,
      value: props.defaultValue,
      shouldTrackMouse: false
    }
  }

  componentDidMount () {
    if (window !== undefined) {
      setTimeout(() => {
        this.setState({
          sliderLeft: this.getSliderLeftFromValue(this.state.value)
        })
      }, 0)
    }
  }

  componentWillUnmount () {
    if (window !== undefined) {
      document.removeEventListener('mouseup', this.untrackMousePosition)
    }
  }

  inputBarMouseDown = this.trackMousePosition

  onMouseDown = (e) => {
    e.stopPropagation()
    this.setState({ shouldTrackMouse: true })
    document.addEventListener('mousemove', this.trackMousePosition)
    document.addEventListener('mouseup', this.untrackMousePosition)
  }

  untrackMousePosition = () => {
    document.removeEventListener('mousemove', this.trackMousePosition)
    this.setState(
      (state) => ({
        ...state,
        shouldTrackMouse: false
      }),
      () => {
        this.props.onChange(this.state.value)
        document.removeEventListener('mouseup', this.untrackMousePosition)
      }
    )
  }

  trackMousePosition = ({ clientX }) => {
    const value = this.getValueFromMousePosition(clientX)
    this.setState({
      sliderLeft: this.getSliderLeftFromValue(value),
      value
    })
  }

  computeStepLength = () => {
    const { width: inputBarWidth } = this._inputBar.getBoundingClientRect()
    const stepLength = inputBarWidth / this.state.intervalNum
    return stepLength
  }

  getValueFromMousePosition = (mouseX) => {
    const { left: inputBarLeft } = this._inputBar.getBoundingClientRect()
    const stepLength = this.computeStepLength()
    const stepNum = Math.round((mouseX - inputBarLeft) / stepLength)
    return this.getValueFromStepNum(stepNum)
  }

  getValueFromStepNum = (stepNum) => {
    const { min, max, step } = this.props
    return min + stepNum * step > max ? max : (min + stepNum * step < min ? min : min + stepNum * step)
  }

  getSliderLeftFromValue = (value) => {
    const { min, step } = this.props
    const stepLength = this.computeStepLength()
    return stepLength * (value - min) / step
  }

  handleValueInputChange = (e) => {
    const { min, step } = this.props
    const stepNum = Math.round((e.target.value - min) / step)
    const value = this.getValueFromStepNum(stepNum)
    this.setState({
      value,
      sliderLeft: this.getSliderLeftFromValue(value)
    })
  }

  render () {
    const { unit, step } = this.props
    const { value, sliderLeft } = this.state

    return (
      <RangeInputContainer>
        <RangeInputBar innerRef={e => { this._inputBar = e }} onMouseDown={this.trackMousePosition}>
          <RangeInputSlider left={sliderLeft} onMouseDown={this.onMouseDown} />
        </RangeInputBar>
        <RangeValue>
          <RangeValueInput type='number' step={step} value={value} onChange={this.handleValueInputChange} />{unit}
        </RangeValue>
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
