import React from 'react'
import { InputTypeContainer } from 'components/shared/Containers'
import { Label } from 'components/shared/Typo'

const createBasicInputType = (InputComponent) => class BasicInputType extends React.PureComponent {
  static defaultProps = {
    changeThemeSettingsAction: () => {}
  }

  handleOnChange = (e) => {
    const { id, changeThemeSettingsAction } = this.props
    changeThemeSettingsAction({ key: id, value: e.target.value })
  }

  render () {
    const { label } = this.props
    return (
      <InputTypeContainer>
        <Label>{label}</Label>
        <InputComponent onChange={this.handleOnChange} {...this.props} />
      </InputTypeContainer>
    )
  }
}

export default createBasicInputType
