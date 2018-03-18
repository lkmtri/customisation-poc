import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ErrorBoundary from 'components/shared/ErrorBoundary'
import Tab from 'components/shared/Tab'
import SectionSettings from 'components/section-settings'
import ThemeSettings from 'components/theme-settings'
import { STORE_KEY } from './constants'
import * as actions from './actions'
import { initialState, reducers } from './reducers'

const CustomisationSidebarContainer = styled.div`
  background-color: #ccc;
  width: 300px;
`

class CustomisationSidebar extends React.PureComponent {
  static getInitialState = () => ({ [STORE_KEY]: initialState })

  static getReducers = () => ({ [STORE_KEY]: reducers })

  render () {
    const { themeSettingSchema, themeSettingData, updateThemeSettingsAction } = this.props
    const { sectionSettingSchema, sectionSettingData, updateSectionSettingsAction, updateSectionContentAction, reorderSectionsAction } = this.props

    return (
      <ErrorBoundary>
        <CustomisationSidebarContainer>
          <Tab tabs={['Sections', 'Theme']}>
            {(selectedTab) => {
              switch (selectedTab) {
                case 'Theme':
                  return (
                    <ThemeSettings
                      schema={themeSettingSchema}
                      data={themeSettingData}
                      updateThemeSettingsAction={updateThemeSettingsAction}
                    />
                  )
                default:
                  return (
                    <SectionSettings
                      schema={sectionSettingSchema}
                      data={sectionSettingData}
                      updateSectionSettingsAction={updateSectionSettingsAction}
                      updateSectionContentAction={updateSectionContentAction}
                      reorderSectionsAction={reorderSectionsAction}
                    />
                  )
              }
            }}
          </Tab>
        </CustomisationSidebarContainer>
      </ErrorBoundary>
    )
  }
}

const mapStateToProps = (state) => state[STORE_KEY].toJS()

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CustomisationSidebar)
