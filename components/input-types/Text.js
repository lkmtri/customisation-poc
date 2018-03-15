import React from 'react'
import styled from 'styled-components'
import BasicInputType from 'decorators/BasicInputType'

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
    const { default: defaultValue, onChange } = this.props
    return (
      <Input defaultValue={defaultValue} onChange={onChange} />
    )
  }
}

export default BasicInputType(Text)
