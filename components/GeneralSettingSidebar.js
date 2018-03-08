import React from 'react'
import styled from 'styled-components'
import Typography from 'components/Typography'

const GeneralSettingSidebarContainer = styled.div``

class GeneralSettingSidebar extends React.PureComponent {
  render () {
    return (
      <GeneralSettingSidebarContainer>
        <Typography />
      </GeneralSettingSidebarContainer>
    )
  }
}

export default GeneralSettingSidebar
