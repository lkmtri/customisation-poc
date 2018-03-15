import React from 'react'
import { Subheading } from 'components/shared/Typo'
import { HeaderTypeContainer } from 'components/shared/Containers'

class Header extends React.PureComponent {
  render () {
    return (
      <HeaderTypeContainer>
        <Subheading>{this.props.content}</Subheading>
      </HeaderTypeContainer>
    )
  }
}

export default Header
