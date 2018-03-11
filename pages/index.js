import React from 'react'
import styled from 'styled-components'
import Page from 'decorators/Page'
import CustomisationSidebar from 'containers/CustomisationSidebar'
import CustomisationPreview from 'containers/CustomisationPreview'
import Flex from 'components/shared/Flex'

const PageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`

const PortalContainer = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
`

class Index extends React.PureComponent {
  static getInitialState = () => ({
    ...CustomisationSidebar.getInitialState(),
    ...CustomisationPreview.getInitialState()
  })

  static getReducers = () => ({
    ...CustomisationSidebar.getReducers(),
    ...CustomisationPreview.getReducers()
  })

  render () {
    return (
      <PageContainer>
        <Flex style={{ height: '100%', width: '100%' }}>
          <CustomisationSidebar />
          <CustomisationPreview />
        </Flex>
        <PortalContainer id='portal-node' />
      </PageContainer>
    )
  }
}

export default Page(Index)
