import React from 'react'
import styled from 'styled-components'
import { arrayMove } from 'react-sortable-hoc'
import SectionSettingType, { SortableSectionSettingTypeList } from 'components/section-settings/SectionSettingType'

const Container = styled.div`
  height: 100%;
  overflow: scroll;
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

  onSortMove = console.log

  render () {
    const { page, schema, data, updateSectionSettingsAction, updateSectionContentAction, reorderBlocksAction } = this.props
    const headerSchema = schema.find(sectionSchema => sectionSchema.type === 'header')
    const footerSchema = schema.find(sectionSchema => sectionSchema.type === 'footer')

    return (
      <Container>
        {data.sections && (
          <React.Fragment>
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
              onSortMove={console.log}
              lockAxis='y'
              useDragHandle />
            <SectionSettingType
              sectionId={'footer'}
              schema={footerSchema}
              data={data.sections.footer}
              updateSectionSettingsAction={updateSectionSettingsAction}
              updateSectionContentAction={updateSectionContentAction} />
          </React.Fragment>
        )}
      </Container>
    )
  }
}

export default SectionSidebar
