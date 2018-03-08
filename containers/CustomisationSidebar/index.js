import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { initialState, reducers } from './reducers'
import Tab from 'components/Tab'
// import SectionSidebar from 'components/SectionSidebar'
import GeneralSettingSidebar from 'components/GeneralSettingSidebar'

const STORE_KEY = '@@containers/CustomisationSideBar'

const CustomisationSidebarContainer = styled.div`
  background-color: #ccc;
  width: 300px;
`

class CustomisationSidebar extends React.PureComponent {
  static getInitialState = () => ({ [STORE_KEY]: initialState })

  static getReducers = () => ({ [STORE_KEY]: reducers })

  render () {
    return (
      <CustomisationSidebarContainer>
        <Tab tabs={['Sections', 'Gen. Settings']}>
          {(selectedTab) => {
            switch (selectedTab) {
              case 'Gen. Settings':
                return <GeneralSettingSidebar />
              default:
                return null
                // return <SectionSidebar />
            }
          }}
        </Tab>
      </CustomisationSidebarContainer>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state[STORE_KEY]
})

export default connect(mapStateToProps)(CustomisationSidebar)
