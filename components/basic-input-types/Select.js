import React from 'react'
import styled from 'styled-components'
import BasicInputType from 'decorators/BasicInputType'

const Container = styled.div`
  width: 100%;
  padding: 10px;
  background-color: #999;
`

const Select = styled.select`
  width: 100%;
  height: 30px;
  &:focus {
    outline: none;
  }
`

const Label = styled.div`
  margin-bottom: 6px;
  font-size: 0.9em;
  color: #ddd;
`

class Dropdown extends React.PureComponent {
  static defaultProps = {
    onChange: () => {}
  }

  render () {
    const { className, default: defaultValue, options, label, onChange } = this.props
    return (
      <Container className={className}>
        <Label>{label}</Label>
        <Select defaultValue={defaultValue} onChange={onChange}>
          {options.map(({ value, label }) => (
            <option value={value}>
              {label}
            </option>
          ))}
        </Select>
      </Container>
    )
  }
}

export default BasicInputType(Dropdown)
