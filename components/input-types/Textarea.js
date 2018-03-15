import React from 'react'
import styled from 'styled-components'
import BasicInputType from 'decorators/BasicInputType'
import { InputTypeContainer } from 'components/shared/Containers'
import { Label } from 'components/shared/Typo'

const TextAreaInput = styled.textarea`
  display: block;
  width: 100%;
  min-height: 150px;
  border-radius: 5px;
  border: none;
  padding: 8px;
  font-size: 0.9rem;
  resize: vertical;
  &:focus {
    outline: none;
  }
`

class TextArea extends React.PureComponent {
  render () {
    const { label, default: defaultValue, onChange } = this.props

    return (
      <InputTypeContainer>
        <Label>{label}</Label>
        <TextAreaInput defaultValue={defaultValue} onChange={onChange} />
      </InputTypeContainer>
    )
  }
}

export default BasicInputType(TextArea)
