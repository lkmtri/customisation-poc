import React from 'react'
import styled from 'styled-components'
import Page from 'decorators/Page'
import CustomisationSidebar from 'containers/CustomisationSidebar'
import CustomisationPreview from 'containers/CustomisationPreview'
import Flex from 'components/Flex'

const PageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`

class Index extends React.PureComponent {
  static getInitialState = () => ({ ...CustomisationSidebar.getInitialState() })

  static getReducers = () => ({ ...CustomisationSidebar.getReducers() })

  render () {
    return (
      <PageContainer>
        <Flex style={{ height: '100%', width: '100%' }}>
          <CustomisationSidebar />
          <CustomisationPreview />
        </Flex>
      </PageContainer>
    )
  }
}

export default Page(Index)
