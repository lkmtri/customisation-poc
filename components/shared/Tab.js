import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
`

const TabContainer = styled.div`
  height: 50px;
  display:flex;
  overflow: scroll;
`

const TabItem = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: ${props => props.selected ? '#999' : '#aaa'};
  cursor: pointer;
`

class Tab extends React.PureComponent {
  static defaultProps = {
    tabs: []
  }

  constructor (props) {
    super(props)
    this.state = {
      selectedTab: props.selectedTab || props.tabs[0]
    }
  }

  setSelectedTab = (tab) => () => this.setState({ selectedTab: tab })

  render () {
    const { tabs, children } = this.props
    const { selectedTab } = this.state
    return (
      <Container>
        <TabContainer>
          {tabs.map(tab => (
            <TabItem selected={tab === selectedTab} key={tab} onClick={this.setSelectedTab(tab)}>
              {tab}
            </TabItem>
          ))}
        </TabContainer>
        {children(selectedTab)}
      </Container>
    )
  }
}

export default Tab
