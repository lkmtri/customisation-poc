import React from 'react'
import styled from 'styled-components'
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc'
import SidebarModal from 'components/shared/SidebarModal'
import InputTypeComponents from 'components/input-types'
import ContentInput from 'components/section-settings/ContentInput'

const Container = styled.div`
  margin-top: 10px;
  height: 50px;
  display: flex;
  justify-content: space-between;
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

const SortableList = styled.ul`
  padding: 0;
  & > ${Container}+${Container} {
    margin-top: 0;
    border-top: 1px #ccc solid;
  }
`

const DragHandlerContainer = styled.span`
  cursor: grab;
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
    const { sectionId, schema, data, updateSectionSettingsAction, updateSectionContentAction, DragHandlerComponent } = this.props
    const { showSectionSettings } = this.state

    return (
      <Container onClick={this.showSectionSettings}>
        {schema.name}
        {DragHandlerComponent && <DragHandlerComponent />}
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

const DragHandler = SortableHandle(() => <DragHandlerContainer>::</DragHandlerContainer>)

const SortableSectionSettingType = SortableElement((props) => <SectionSettingType {...props} DragHandlerComponent={DragHandler} />)

export const SortableSectionSettingTypeList = SortableContainer(
  ({ page = 'index', schema, data, updateSectionSettingsAction, updateSectionContentAction }) => (
    <SortableList>
      {data.pages[page].map((sectionId, index) => {
        const sectionData = data.sections[sectionId]
        const sectionSchema = schema.find(_sectionSchema => _sectionSchema.type === sectionData.type)
        return (
          <SortableSectionSettingType
            index={index}
            key={sectionId}
            sectionId={sectionId}
            schema={sectionSchema}
            data={sectionData}
            updateSectionSettingsAction={updateSectionSettingsAction}
            updateSectionContentAction={updateSectionContentAction} />
        )
      })}
    </SortableList>
  )
)

export default SectionSettingType
