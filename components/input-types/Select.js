import React from 'react'
import styled from 'styled-components'
import { isMember } from 'tools/array'
import BasicInputType from 'decorators/BasicInputType'
import { InputTypeContainer } from 'components/shared/Containers'
import { Label } from 'components/shared/Typo'

const Select = styled.select`
  width: 100%;
  height: 30px;
  &:focus {
    outline: none;
  }
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
      return acc
    }, [])
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
    const { default: defaultValue, label, onChange } = this.props
    const { isGroupedOption } = this.state
    return (
      <InputTypeContainer>
        <Label>{label}</Label>
        <Select defaultValue={defaultValue} onChange={onChange}>
          {isGroupedOption ? this.renderGroupedSelect() : this.renderSelect()}
        </Select>
      </InputTypeContainer>
    )
  }
}

export default BasicInputType(Dropdown)
