import React from 'react'
import styled from 'styled-components'
import { arrayMove } from 'react-sortable-hoc'
import SectionSettingType, { SortableSectionSettingTypeList } from 'components/section-settings/SectionSettingType'
import AddNewSection from 'components/section-settings/AddNewSection'

const Container = styled.div`
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
`

const SectionSettingsContainer = styled.div`
  flex: 1 1 auto;
  overflow-y: scroll;
`

const SectionActionContainer = styled.div`
  height: 50px;
  min-height: 50px;
  background-color: #999;
`

class SectionSidebar extends React.PureComponent {
  static defaultProps = {
    page: 'index'
  }

  reorderSections = ({ oldIndex, newIndex }) => {
    const { page, data, reorderSectionsAction } = this.props
    const nextSectionsOrder = arrayMove(data.pages[page], oldIndex, newIndex)
    reorderSectionsAction({ page, nextSectionsOrder })
  }

  render () {
    const { page, schema, data, updateSectionSettingsAction, updateSectionContentAction, reorderBlocksAction, addNewSectionAction } = this.props
    const headerSchema = schema.find(sectionSchema => sectionSchema.type === 'header')
    const footerSchema = schema.find(sectionSchema => sectionSchema.type === 'footer')

    return (
      <Container>
        {data.sections && (
          <SectionSettingsContainer>
            <SectionSettingType
              sectionId={'header'}
              schema={headerSchema}
              data={data.sections.header}
              updateSectionSettingsAction={updateSectionSettingsAction}
              updateSectionContentAction={updateSectionContentAction} />
            <SortableSectionSettingTypeList
              page={page}
              schema={schema}
              data={data}
              updateSectionSettingsAction={updateSectionSettingsAction}
              updateSectionContentAction={updateSectionContentAction}
              reorderBlocksAction={reorderBlocksAction}
              onSortEnd={this.reorderSections}
              lockAxis='y'
              useDragHandle />
            <SectionSettingType
              sectionId={'footer'}
              schema={footerSchema}
              data={data.sections.footer}
              updateSectionSettingsAction={updateSectionSettingsAction}
              updateSectionContentAction={updateSectionContentAction} />
            <AddNewSection
              page={page}
              schema={schema}
              addNewSectionAction={addNewSectionAction} />
          </SectionSettingsContainer>
        )}
        <SectionActionContainer />
      </Container>
    )
  }
}

export default SectionSidebar
