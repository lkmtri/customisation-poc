import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
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

  handleChange = (e) => {
    this.props.onChange(e.target.value)
  }

  render () {
    const { className, choices, label } = this.props
    return (
      <Container className={className}>
        <Label>{label}</Label>
        <Select onChange={this.handleChange}>
          {choices.map(({ value, display }) => (
            <option value={value}>
              {display}
            </option>
          ))}
        </Select>
      </Container>
    )
  }
}

export default Dropdown
