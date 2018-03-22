import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { storeKeys, actions } from 'redux-store'
import ErrorBoundary from 'components/shared/ErrorBoundary'
import Tab from 'components/shared/Tab'
import SectionSettings from 'components/section-settings'
import ThemeSettings from 'components/theme-settings'

const CustomisationSidebarContainer = styled.div`
  background-color: #ccc;
  width: 300px;
`

class CustomisationSidebar extends React.PureComponent {
  static async getInitialProps (context) {
    const { store } = context
    await store.dispatch(actions[storeKeys.customisation].getPreviewTokenAction({ merchantId: '12345' }))
    const previewToken = store.getState()[storeKeys.customisation].previewToken
    await store.dispatch(actions[storeKeys.customisation].getThemeAction({ previewToken }))
  }

  render () {
    const { currentFrameUrl } = this.props
    const { themeSettingSchema, themeSettingData, updateThemeSettingsAction } = this.props
    const { sectionSettingSchema, sectionSettingData, updateSectionSettingsAction, updateSectionContentAction, reorderSectionsAction, reorderBlocksAction, addNewSectionAction } = this.props

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
                      addNewSectionAction={addNewSectionAction}
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
  ...state[storeKeys.customisation],
  ...state[storeKeys.frame]
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  ...actions[storeKeys.customisation],
  ...actions[storeKeys.frame]
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CustomisationSidebar)
