import React from 'react'
import Select from 'components/input-types/Select'
import Header from 'components/input-types/Header'
import Text from 'components/input-types/Text'
import Checkbox from 'components/input-types/Checkbox'
import Textarea from 'components/input-types/Textarea'

const schemaToInputTypesMap = {
  'header': Header,
  'text': Text,
  'select': Select,
  'checkbox': Checkbox,
  'textarea': Textarea
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
