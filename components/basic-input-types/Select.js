import React from 'react'
import styled from 'styled-components'
import { isMember } from 'tools/array'

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

  constructor (props) {
    super(props)
    this.state = {
      isGroupedOption: props.options.reduce((acc, option) => acc && option.group !== undefined, true)
    }
  }

  renderGroupedSelect = () => {
    const { options } = this.props
    const groups = options.reduce((acc, option) => {
      !isMember(acc, option.group) && acc.push(option.group)
      console.log(acc, option.group, isMember(acc, option.group))
      return acc
    }, [])
    console.log(groups)
    return groups.map(group => (
      <optgroup key={group} label={group}>
        {options.filter(option => option.group === group).map(({ value, label }) => (<option key={value} value={value}>{label}</option>))}
      </optgroup>
    ))
  }

  renderSelect = () => {
    const { options } = this.props
    return options.map(({ value, label }) => (<option key={value} value={value}>{label}</option>))
  }

  render () {
    const { className, default: defaultValue, label, onChange } = this.props
    const { isGroupedOption } = this.state
    console.log(isGroupedOption)
    return (
      <Container className={className}>
        <Label>{label}</Label>
        <Select defaultValue={defaultValue} onChange={onChange}>
          {isGroupedOption ? this.renderGroupedSelect() : this.renderSelect()}
        </Select>
      </Container>
    )
  }
}

export default Dropdown
