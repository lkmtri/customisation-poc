import React from 'react'
import styled from 'styled-components'
import { SortableContainer, SortableElement, SortableHandle, arrayMove } from 'react-sortable-hoc'
import SidebarModal from 'components/shared/SidebarModal'
import InputTypeComponents from 'components/input-types'
import { SortableContentInputList } from 'components/section-settings/ContentInput'

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

const RemoveSectionAction = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  height: 50px;
  background-color: #999;
  color: #fff;
  cursor: pointer;
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

  reorderBlocks = ({ oldIndex, newIndex }) => {
    const { sectionId, data, reorderBlocksAction } = this.props
    const nextBlocksOrder = arrayMove(data.blocksOrder, oldIndex, newIndex)
    reorderBlocksAction({ sectionId, nextBlocksOrder })
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
            <SortableContentInputList
              blocksOrder={blocksOrder}
              blocksData={blocksData}
              blocks={blocks}
              sectionId={sectionId}
              updateSectionContentAction={updateSectionContentAction}
              lockAxis='y'
              useDragHandle
              onSortEnd={this.reorderBlocks} />
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

  handleRemoveSection = (e) => {
    e.stopPropagation()
    const { removeSectionAction, page, sectionId } = this.props
    removeSectionAction({ page, sectionId })
    this.setState({ showSectionSettings: false })
  }

  render () {
    const { sectionId, schema, data, updateSectionSettingsAction, updateSectionContentAction, reorderBlocksAction, DragHandlerComponent } = this.props
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
              updateSectionContentAction={updateSectionContentAction}
              reorderBlocksAction={reorderBlocksAction} />
            <RemoveSectionAction onClick={this.handleRemoveSection}>RemoveSection</RemoveSectionAction>
          </SidebarModal>
        )}
      </Container>
    )
  }
}

const DragHandler = SortableHandle(() => <DragHandlerContainer>::</DragHandlerContainer>)

const SortableSectionSettingType = SortableElement((props) => <SectionSettingType {...props} DragHandlerComponent={DragHandler} />)

export const SortableSectionSettingTypeList = SortableContainer(
  ({ page = 'index', schema, data, updateSectionSettingsAction, updateSectionContentAction, reorderBlocksAction, removeSectionAction }) => (
    <SortableList>
      {data.pages[page].map((sectionId, index) => {
        const sectionData = data.sections[sectionId]
        const sectionSchema = schema.find(_sectionSchema => _sectionSchema.type === sectionData.type)
        return (
          <SortableSectionSettingType
            page={page}
            index={index}
            key={sectionId}
            sectionId={sectionId}
            schema={sectionSchema}
            data={sectionData}
            updateSectionSettingsAction={updateSectionSettingsAction}
            updateSectionContentAction={updateSectionContentAction}
            reorderBlocksAction={reorderBlocksAction}
            removeSectionAction={removeSectionAction} />
        )
      })}
    </SortableList>
  )
)

export default SectionSettingType
