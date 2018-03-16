import React from 'react'
import styled from 'styled-components'
import BasicInputType from 'decorators/BasicInputType'
import { InputTypeContainer } from 'components/shared/Containers'
import { Label } from 'components/shared/Typo'

const RadioInputContainer = styled.div`
  display: flex;
  align-items: center;
`

const RadioInput = styled.input`
  margin: 0;
  margin-right: 7px;
`

class Radio extends React.PureComponent {
  static defaultProps = {
    defaultValue: [],
    multi: false
  }

  handleChange = (value, e) => {
    const { onChange, multi } = this.props
    if (!multi) {
      this.setState({ selectedOptions: [value] })
      onChange([ value ])
      return
    }
    const { selectedOptions } = this.state
    let found = false
    const nextSelectedOptions = selectedOptions.reduce((acc, cur) => {
      cur !== value ? acc.push(cur) : found = true
      return acc
    }, [])
    !found && nextSelectedOptions.push(value)
    onChange(nextSelectedOptions)
  }

  getCheckStatus = (value) => {
    const { value: _selectedOptions, defaultValue } = this.props
    const selectedOptions = _selectedOptions || defaultValue
    return selectedOptions.findIndex((el) => el === value) >= 0
  }

  render () {
    const { label, options } = this.props
    return (
      <InputTypeContainer>
        <Label>{label}</Label>
        {options.map(({ value, label }) => (
          <RadioInputContainer key={label}>
            <RadioInput type='radio' value={value} name={label} checked={this.getCheckStatus(value)} onClick={this.handleChange.bind(null, value)} />
            <Label>{label}</Label>
          </RadioInputContainer>
        ))}
      </InputTypeContainer>
    )
  }
}

export default BasicInputType(Radio)
