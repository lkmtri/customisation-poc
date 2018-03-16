import React from 'react'
import styled from 'styled-components'
import SidebarModal from 'components/shared/SidebarModal'
import InputTypeComponents from 'components/input-types'
import ContentInput from 'components/section-settings/ContentInput'

const Container = styled.div`
  margin-top: 10px;
  height: 50px;
  display: flex;
  padding: 10px;
  align-items: center;
  background-color: #999;
  cursor: pointer;
  color: #fff;
`

const SectionHeading = styled.div`
  padding: 10px;
  font-weight: bold;
`

class SectionSettingsInput extends React.PureComponent {
  static defaultProps = {
    presets: {},
    data: {}
  }

  state = {
    showBlockSettings: false
  }

  showBlockSettings = (blockToShow) => { this.setState({ showBlockSettings: true, blockToShow }) }

  hideBlockSettings = (e) => {
    e.stopPropagation()
    this.setState({ showBlockSettings: false })
  }

  render () {
    const { schema, data } = this.props
    const { settings = [], blocks = [], presets = {} } = schema
    const { settings: settingsData = {}, blocks: blocksData = [] } = data
    const currentBlocks = (blocksData.length !== 0 ? blocksData : presets.blocks) || []

    return (
      <React.Fragment>
        <SectionHeading>Settings</SectionHeading>
        {settings.map((settingInput) => {
          const InputTypeComponent = InputTypeComponents[settingInput.type]
          return <InputTypeComponent value={settingsData[settingInput.id]} {...settingInput} />
        })}
        {currentBlocks.length > 0 && (
          <React.Fragment>
            <SectionHeading>Content</SectionHeading>
            {currentBlocks.map((block) => {
              const blockSchema = blocks.find(el => el.type === block.type)
              const blockData = blocksData.length !== 0 ? block : {}
              return <ContentInput key={blockData.id || blockSchema.type} schema={blockSchema} data={blockData} />
            })}
          </React.Fragment>
        )}
      </React.Fragment>
    )
  }
}

class SectionSettingType extends React.PureComponent {
  state = {
    showSectionSettings: false
  }

  showSectionSettings = () => {
    this.setState({ showSectionSettings: true })
  }

  hideSectionSettings = (e) => {
    e.stopPropagation()
    this.setState({ showSectionSettings: false })
  }

  render () {
    const { schema, data } = this.props
    const { showSectionSettings } = this.state

    return (
      <Container onClick={this.showSectionSettings}>
        {schema.name}
        {showSectionSettings && (
          <SidebarModal title={schema.name} onClose={this.hideSectionSettings}>
            <SectionSettingsInput schema={schema} data={data} />
          </SidebarModal>
        )}
      </Container>
    )
  }
}

export default SectionSettingType
