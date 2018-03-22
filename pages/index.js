import React from 'react'
import styled from 'styled-components'
import Page from 'decorators/Page'
import Protected from 'decorators/Protected'
import CustomisationSidebar from 'containers/CustomisationSidebar'
import CustomisationPreview from 'containers/CustomisationPreview'
import FrameConnector from 'containers/FrameConnector'
import Flex from 'components/shared/Flex'

const PageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`

const PortalContainer = styled.div`
  z-index: 0;
  position: fixed;
  top: 0;
  left: 0;
`

class Index extends React.PureComponent {
  static async getInitialProps (context) {
    await CustomisationSidebar.getInitialProps(context)
  }

  render () {
    return (
      <FrameConnector>
        <PageContainer>
          <Flex style={{ height: '100%', width: '100%' }}>
            <CustomisationSidebar />
            <CustomisationPreview />
          </Flex>
          <PortalContainer id='portal-node' />
        </PageContainer>
      </FrameConnector>
    )
  }
}

export default Page(Protected(Index))
