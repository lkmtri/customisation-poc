import React from 'react'
import styled from 'styled-components'
import uuid from 'uuid/v4'
import SidebarModal from 'components/shared/SidebarModal'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  height: 50px;
  width: 100%;
  padding: 10px;
  background-color: #999;
  color: #fff;
  cursor: pointer;
`

const SectionItem = styled.div`
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

const makeNewSectionFromSchema = ({ name, type, settings, blocks, presets }) => {
  const newId = `${type}_${uuid()}`
  const sectionSettings = settings.reduce((acc, setting) => {
    acc[setting.id] = setting.default
    return acc
  }, {})
  const sectionBlock = presets.blocks.reduce((acc, block) => {
    const blockSchema = blocks.find(e => e.type === block.type)
    const blockId = `${blockSchema.name}_${uuid()}`
    acc[blockId] = {
      ...blockSchema,
      id: blockId,
      settings: blockSchema.settings.reduce((acc, blockSetting) => {
        acc[blockSetting.id] = blockSetting.default
        return acc
      }, {})
    }
    return acc
  }, {})
  return {
    id: newId,
    data: {
      id: newId,
      type,
      settings: sectionSettings,
      blocks: sectionBlock,
      blocksOrder: Object.keys(sectionBlock)
    }
  }
}

class AddNewSection extends React.PureComponent {
  state = {
    showSectionListModal: false
  }

  showSectionListModal = () => this.setState({ showSectionListModal: true })

  hideSectionListModal = (e) => {
    e.stopPropagation()
    this.setState({ showSectionListModal: false })
  }

  handleAddNewSection = (sectionSchema) => (e) => {
    e.stopPropagation()
    const { addNewSectionAction, page } = this.props
    const { id, data } = makeNewSectionFromSchema(sectionSchema)
    addNewSectionAction({ page, id, data })
    this.setState({ showSectionListModal: false })
  }

  render () {
    const { schema } = this.props
    const { showSectionListModal } = this.state

    return (
      <Container onClick={this.showSectionListModal}>
        <span>Add New Section</span><span>+</span>
        {showSectionListModal && (
          <SidebarModal title='Add New Section' onClose={this.hideSectionListModal}>
            {schema.filter(e => e.type !== 'header' && e.type !== 'footer').map((sectionSchema) => {
              return (
                <SectionItem onClick={this.handleAddNewSection(sectionSchema)}>
                  {sectionSchema.name}
                </SectionItem>
              )
            })}
          </SidebarModal>
        )}
      </Container>
    )
  }
}

export default AddNewSection
