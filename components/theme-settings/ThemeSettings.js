import React from 'react'
import styled from 'styled-components'
import { schema } from 'schema'
import SidebarModal from 'components/shared/SidebarModal'
import ThemeSettingType from 'components/theme-settings/ThemeSettingType'

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

class GeneralSettingSidebar extends React.PureComponent {
  state = {
    showSettingType: false
  }

  openSettingType = (settingType) => () => {
    this.setState({ showSettingType: true, settingType })
  }

  closeSettingType = () => this.setState({ showSettingType: false })

  render () {
    const { changeThemeSettingsAction } = this.props
    const { showSettingType, settingType } = this.state
    return (
      <Container>
        {schema.map(({ settings, name }) => <SettingType onClick={this.openSettingType({ settings, name })} settings={settings}>{name}</SettingType>)}
        {showSettingType && (
          <SidebarModal title={settingType.name} onClose={this.closeSettingType}>
            <ThemeSettingType changeThemeSettingsAction={changeThemeSettingsAction} settings={settingType.settings} />
          </SidebarModal>
        )}
      </Container>
    )
  }
}

export default GeneralSettingSidebar
