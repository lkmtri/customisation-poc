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
    const { page, schema, data } = this.props

    return (
      <Container>
        {data.pages && data.pages[page].map((section) => {
          const sectionData = data.sections[section]
          const sectionSchema = schema.find(_sectionSchema => _sectionSchema.type === sectionData.type)
          return <SectionSettingType key={section} schema={sectionSchema} data={sectionData} />
        })}
      </Container>
    )
  }
}

export default SectionSidebar
