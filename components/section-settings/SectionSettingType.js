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
    schema: {},
    data: {}
  }

  updateSectionSettings = ({ key, value }) => {
    const { sectionId, updateSectionSettingsAction } = this.props
    updateSectionSettingsAction({ sectionId, key, value })
  }

  render () {
    const { sectionId, schema, data, updateSectionContentAction } = this.props
    const { settings = [], blocks = [] } = schema
    const { settings: settingsData = {}, blocks: blocksData = {}, blocksOrder = [] } = data

    return (
      <React.Fragment>
        <SectionHeading>Settings</SectionHeading>
        {settings.map((settingInput) => {
          const InputTypeComponent = InputTypeComponents[settingInput.type]
          return <InputTypeComponent onChangeAction={this.updateSectionSettings} sectionId={sectionId} value={settingsData[settingInput.id]} {...settingInput} />
        })}
        {blocksOrder.length > 0 && (
          <React.Fragment>
            <SectionHeading>Content</SectionHeading>
            {blocksOrder.map((blockId) => {
              const blockData = blocksData[blockId]
              const blockSchema = blocks.find(el => el.type === blockData.type)
              return (
                <ContentInput
                  sectionId={sectionId}
                  blockId={blockId}
                  key={blockId}
                  schema={blockSchema}
                  data={blockData}
                  updateSectionContentAction={updateSectionContentAction} />
              )
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
    const { sectionId, schema, data, updateSectionSettingsAction, updateSectionContentAction } = this.props
    const { showSectionSettings } = this.state

    return (
      <Container onClick={this.showSectionSettings}>
        {schema.name}
        {showSectionSettings && (
          <SidebarModal title={schema.name} onClose={this.hideSectionSettings}>
            <SectionSettingsInput
              sectionId={sectionId}
              schema={schema}
              data={data}
              updateSectionSettingsAction={updateSectionSettingsAction}
              updateSectionContentAction={updateSectionContentAction} />
          </SidebarModal>
        )}
      </Container>
    )
  }
}

export default SectionSettingType
