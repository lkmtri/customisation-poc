import React from 'react'
import Select from 'components/basic-input-types/Select'
import Header from 'components/basic-input-types/Header'
import Text from 'components/basic-input-types/Text'

const schemaToInputTypesMap = {
  'header': Header,
  'text': Text,
  'select': Select
}

class ThemeSettingType extends React.PureComponent {
  render () {
    const { settings, changeThemeSettingsAction } = this.props
    return settings.map((setting, idx) => {
      const InputComponent = schemaToInputTypesMap[setting.type]
      return <InputComponent key={idx} changeThemeSettingsAction={changeThemeSettingsAction} {...setting} />
    })
  }
}

export default ThemeSettingType
