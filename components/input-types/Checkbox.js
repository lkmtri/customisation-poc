import React from 'react'
import styled from 'styled-components'
import BasicInputType from 'decorators/BasicInputType'
import { InputTypeContainer } from 'components/shared/Containers'
import { TextStyle } from 'components/shared/Typo'

const StyledCheckbox = styled.input`
`

const Container = styled(InputTypeContainer)`
  padding-top: 10px;
`

class Checkbox extends React.PureComponent {
  handleChange = (e) => {
    const { onChange, value } = this.props
    onChange(!value)
  }

  render () {
    const { value, default: defaultValue, label } = this.props
    const checked = value !== undefined ? value : defaultValue

    return (
      <Container>
        <StyledCheckbox type='checkbox' checked={checked} onChange={this.handleChange} />
        <TextStyle>{label}</TextStyle>
      </Container>
    )
  }
}

export default BasicInputType(Checkbox)
