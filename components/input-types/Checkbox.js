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
  constructor (props) {
    super(props)
    this.state = {
      checked: props.default
    }
  }

  handleChange = (e) => {
    const { onChange } = this.props
    const { checked } = this.state
    this.setState(
      (state) => ({ ...state, checked: !checked }),
      () => onChange(!checked)
    )
  }

  render () {
    const { label } = this.props
    const { checked } = this.state

    return (
      <Container>
        <StyledCheckbox type='checkbox' checked={checked} onChange={this.handleChange} />
        <TextStyle>{label}</TextStyle>
      </Container>
    )
  }
}

export default BasicInputType(Checkbox)
