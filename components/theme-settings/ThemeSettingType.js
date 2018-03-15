import React from 'react'
import Select from 'components/input-types/Select'
import Header from 'components/input-types/Header'
import Text from 'components/input-types/Text'
import Checkbox from 'components/input-types/Checkbox'

const schemaToInputTypesMap = {
  'header': Header,
  'text': Text,
  'select': Select,
  'checkbox': Checkbox
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
