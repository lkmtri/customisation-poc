import React from 'react'
import styled from 'styled-components'
import SectionSettingType from 'components/section-settings/SectionSettingType'

const Container = styled.div`
  height: 100%;
  overflow: scroll;
`

class SectionSidebar extends React.PureComponent {
  static defaultProps = {
    page: 'index'
  }

  render () {
    const { page, schema, data, updateSectionSettingsAction, updateSectionContentAction } = this.props

    return (
      <Container>
        {data.pages && data.pages[page].map((sectionId) => {
          const sectionData = data.sections[sectionId]
          const sectionSchema = schema.find(_sectionSchema => _sectionSchema.type === sectionData.type)
          return (
            <SectionSettingType
              key={sectionId}
              sectionId={sectionId}
              schema={sectionSchema}
              data={sectionData}
              updateSectionSettingsAction={updateSectionSettingsAction}
              updateSectionContentAction={updateSectionContentAction}
            />
          )
        })}
      </Container>
    )
  }
}

export default SectionSidebar
