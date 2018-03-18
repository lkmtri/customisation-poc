import React from 'react'
import styled from 'styled-components'
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc'
import InputTypeComponents from 'components/input-types'

const Container = styled.div`
  min-height: 50px;
  height: auto;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  background-color: #999;
  cursor: pointer;
  color: #fff;
`

class ContentInput extends React.PureComponent {
  state = {
    showContentInputSettings: false
  }

  toggleContentInputSettings = () => {
    const { disableSort, enableSort } = this.props
    !this.state.showContentInputSettings ? disableSort() : enableSort()
    this.setState({ showContentInputSettings: !this.state.showContentInputSettings })
  }

  updateSectionContent = ({ key, value }) => {
    const { sectionId, blockId, updateSectionContentAction } = this.props
    updateSectionContentAction({ sectionId, blockId, key, value })
  }

  render () {
    const { sectionId, blockId, schema, data, DragHandlerComponent, isSortDisable } = this.props
    const { showContentInputSettings } = this.state

    return (
      <div>
        <Container onClick={this.toggleContentInputSettings}>
          {schema.name}
          {isSortDisable !== true && (DragHandlerComponent && <DragHandlerComponent />)}
        </Container>
        {showContentInputSettings &&
          schema.settings.map((input) => {
            const InputTypeComponent = InputTypeComponents[input.type]
            return <InputTypeComponent onChangeAction={this.updateSectionContent} sectionId={sectionId} blockId={blockId} key={input.id} value={data.settings && data.settings[input.id]} {...input} />
          })}
      </div>
    )
  }
}

const DragHandlerContainer = styled.span`
  cursor: grab;
`

const DragHandler = SortableHandle(() => <DragHandlerContainer>::</DragHandlerContainer>)

const SortableContentInput = SortableElement((props) => <ContentInput {...props} DragHandlerComponent={DragHandler} />)

const SortableList = styled.ul`
  padding: 0;
  & ${Container}+${Container} {
    margin-top: 0;
    border-top: 1px #ccc solid;
  }
`

class ContentInputList extends React.PureComponent {
  state = {
    disableSort: 0
  }

  disableSort = () => this.setState({ disableSort: this.state.disableSort + 1 })

  enableSort = () => this.setState({ disableSort: this.state.disableSort - 1 })

  render () {
    const { blocksOrder, blocksData, blocks, sectionId, updateSectionContentAction } = this.props
    const { disableSort } = this.state

    return (
      <SortableList>
        {blocksOrder.map((blockId, index) => {
          const blockData = blocksData[blockId]
          const blockSchema = blocks.find(el => el.type === blockData.type)
          return (
            <SortableContentInput
              index={index}
              sectionId={sectionId}
              blockId={blockId}
              key={blockId}
              schema={blockSchema}
              data={blockData}
              updateSectionContentAction={updateSectionContentAction}
              disabled={disableSort !== 0}
              isSortDisable={disableSort !== 0}
              disableSort={this.disableSort}
              enableSort={this.enableSort} />
          )
        })}
      </SortableList>
    )
  }
}

export const SortableContentInputList = SortableContainer(ContentInputList)

export default ContentInput
