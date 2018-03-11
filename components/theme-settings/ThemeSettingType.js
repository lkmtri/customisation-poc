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
    const { settings } = this.props
    return settings.map((setting) => {
      const InputComponent = schemaToInputTypesMap[setting.type]
      return <InputComponent {...setting} />
    })
  }
}

export default ThemeSettingType
