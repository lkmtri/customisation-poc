import React from 'react'
import Select from 'components/input-types/Select'
import Header from 'components/input-types/Header'
import Text from 'components/input-types/Text'
import Checkbox from 'components/input-types/Checkbox'
import Textarea from 'components/input-types/Textarea'
import Range from 'components/input-types/Range'
import Radio from 'components/input-types/Radio'

const schemaToInputTypesMap = {
  'header': Header,
  'text': Text,
  'select': Select,
  'checkbox': Checkbox,
  'textarea': Textarea,
  'range': Range,
  'radio': Radio
}

class ThemeSettingType extends React.PureComponent {
  render () {
    const { settings, data, changeThemeSettingsAction } = this.props
    return settings.map((setting, idx) => {
      const InputComponent = schemaToInputTypesMap[setting.type]
      return <InputComponent key={idx} value={data[setting.id]} changeThemeSettingsAction={changeThemeSettingsAction} {...setting} />
    })
  }
}

export default ThemeSettingType
