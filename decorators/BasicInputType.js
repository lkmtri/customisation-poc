import React from 'react'

const createBasicInputType = (InputComponent) => class BasicInputType extends React.PureComponent {
  static defaultProps = {
    changeThemeSettingsAction: () => {}
  }

  handleOnChange = (e) => {
    const { id, changeThemeSettingsAction } = this.props
    const value = e.target ? e.target.value : e
    changeThemeSettingsAction({ key: id, value })
  }

  render () {
    return <InputComponent onChange={this.handleOnChange} {...this.props} />
  }
}

export default createBasicInputType
