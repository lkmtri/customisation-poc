import React from 'react'

const createBasicInputType = (InputComponent) => class BasicInputType extends React.PureComponent {
  static defaultProps = {
    changeThemeSettingsAction: () => {}
  }

  handleOnChange = (e) => {
    const { id, changeThemeSettingsAction } = this.props
    changeThemeSettingsAction({ key: id, value: e.target.value })
  }

  render () {
    return <InputComponent onChange={this.handleOnChange} {...this.props} />
  }
}

export default createBasicInputType
