import React from 'react'
import styled from 'styled-components'
import SidebarModal from 'components/shared/SidebarModal'
import InputTypeComponents from 'components/input-types'

const Container = styled.div`
  margin-top: 10px;
`

const SettingType = styled.div`
  width: 100%;
  height: 50px;
  background-color: #999;
  display: flex;
  align-items: center;
  padding-left: 10px;
  position: relative;
  cursor: pointer;
  &:hover {
    background-color: #aaa;
  }
  &:after {
    content: '>';
    position: absolute;
    top: 15px;
    right: 10px;
  }
`

class ThemeSettings extends React.PureComponent {
  state = {
    showSettingType: false
  }

  openSettingType = (settingType) => () => {
    this.setState({ showSettingType: true, settingType })
  }

  closeSettingType = () => this.setState({ showSettingType: false })

  render () {
    const { changeThemeSettingsAction, schema, data } = this.props
    const { showSettingType, settingType } = this.state

    return (
      <Container>
        {schema.map(({ settings, name }) => <SettingType key={name} onClick={this.openSettingType({ settings, name })} settings={settings}>{name}</SettingType>)}
        {showSettingType && (
          <SidebarModal title={settingType.name} onClose={this.closeSettingType}>
            {settingType.settings.map((setting, idx) => {
              const InputComponent = InputTypeComponents[setting.type]
              return <InputComponent key={idx} value={data[setting.id]} changeThemeSettingsAction={changeThemeSettingsAction} {...setting} />
            })}
          </SidebarModal>
        )}
      </Container>
    )
  }
}

export default ThemeSettings
