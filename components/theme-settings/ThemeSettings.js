import React from 'react'
import styled from 'styled-components'
import { schema } from 'schema'
import SidebarModal from 'components/shared/SidebarModal'
import ThemeSettingType from 'components/theme-settings/ThemeSettingType'

const Container = styled.div``

const SettingType = styled.div`
  width: 100%;
  height: 50px;
  display: flex:
  align-items: center;
  cursor: pointer;
  border-bottom: white 1px solid;
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
    const { showSettingType, settingType } = this.state

    return (
      <Container>
        {schema.map(({ settings, name }) => <SettingType onClick={this.openSettingType({ settings, name })} settings={settings}>{name}</SettingType>)}
        {showSettingType && (
          <SidebarModal title={settingType.name} onClose={this.closeSettingType}>
            <ThemeSettingType settings={settingType.settings} />
          </SidebarModal>
        )}
      </Container>
    )
  }
}

export default GeneralSettingSidebar
