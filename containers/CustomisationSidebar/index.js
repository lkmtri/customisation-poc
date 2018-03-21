import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ErrorBoundary from 'components/shared/ErrorBoundary'
import Tab from 'components/shared/Tab'
import SectionSettings from 'components/section-settings'
import ThemeSettings from 'components/theme-settings'
import { STORE_KEY as PREVIEW_STORE_KEY } from 'containers/CustomisationPreview/constants'
import { STORE_KEY } from './constants'
import * as actions from './actions'
import { reducers } from './reducers'

const CustomisationSidebarContainer = styled.div`
  background-color: #ccc;
  width: 300px;
`

class CustomisationSidebar extends React.PureComponent {
  static async getInitialProps (context) {
    const { store } = context
    await store.dispatch(actions.getPreviewTokenAction({ merchantId: '12345' }))
    const previewToken = store.getState()[STORE_KEY].previewToken
    await store.dispatch(actions.getThemeAction({ merchantId: '12345', previewToken }))
  }

  static getReducers = () => ({ [STORE_KEY]: reducers })

  render () {
    const { currentFrameUrl } = this.props
    const { themeSettingSchema, themeSettingData, updateThemeSettingsAction } = this.props
    const { sectionSettingSchema, sectionSettingData, updateSectionSettingsAction, updateSectionContentAction, reorderSectionsAction, reorderBlocksAction } = this.props

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
                      page={currentFrameUrl}
                      schema={sectionSettingSchema}
                      data={sectionSettingData}
                      updateSectionSettingsAction={updateSectionSettingsAction}
                      updateSectionContentAction={updateSectionContentAction}
                      reorderSectionsAction={reorderSectionsAction}
                      reorderBlocksAction={reorderBlocksAction}
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

const mapStateToProps = (state) => ({
  ...state[STORE_KEY],
  ...state[PREVIEW_STORE_KEY]
})

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CustomisationSidebar)
