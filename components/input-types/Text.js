import React from 'react'
import styled from 'styled-components'
import BasicInputType from 'decorators/BasicInputType'
import { InputTypeContainer } from 'components/shared/Containers'
import { Label } from 'components/shared/Typo'

const Input = styled.input`
  display: block;
  width: 100%;
  height: 28px;
  border-radius: 5px;
  font-size: 0.9rem;
  border: none;
  padding: 0 8px;
  &:focus {
    outline: none;
  }
`

class Text extends React.PureComponent {
  render () {
    const { label, value, default: defaultValue, onChange } = this.props
    return (
      <InputTypeContainer>
        <Label>{label}</Label>
        <Input defaultValue={defaultValue} value={value} onChange={onChange} />
      </InputTypeContainer>
    )
  }
}

export default BasicInputType(Text)
