import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { initialState, reducers } from './reducers'
import Tab from 'components/shared/Tab'
// import SectionSidebar from 'components/SectionSidebar'
import ThemeSettings from 'components/theme-settings/ThemeSettings'
import * as actions from './actions'

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
        <Tab tabs={['Sections', 'Theme']}>
          {(selectedTab) => {
            switch (selectedTab) {
              case 'Theme':
                return <ThemeSettings {...this.props} />
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

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CustomisationSidebar)
