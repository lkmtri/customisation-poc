import { withFrameUpdate, asyncAction } from 'tools/redux/actions'
import {
  getTheme,
  getPreviewToken
} from 'api/theme'
import * as C from './constants'

export const updateThemeSettingsAction = withFrameUpdate(
  ({ key, value }) => ({ type: C.UPDATE_THEME_SETTINGS, payload: { key, value } })
)

export const updateSectionSettingsAction = withFrameUpdate(
  ({ sectionId, key, value }) => ({ type: C.UPDATE_SECTIONS_SETTINGS, payload: { sectionId, key, value } })
)

export const updateSectionContentAction = withFrameUpdate(
  ({ sectionId, blockId, key, value }) => ({ type: C.UPDATE_SECTIONS_CONTENT, payload: { sectionId, blockId, key, value } })
)

export const reorderSectionsAction = withFrameUpdate(
  ({ page, nextSectionsOrder }) => ({ type: C.REORDER_SECTIONS, payload: { page, nextSectionsOrder } })
)

export const reorderBlocksAction = withFrameUpdate(
  ({ sectionId, nextBlocksOrder }) => ({ type: C.REORDER_BLOCKS, payload: { sectionId, nextBlocksOrder } })
)

export const getPreviewTokenAction = asyncAction({
  api: getPreviewToken,
  requestAction: C.GET_PREVIEW_TOKEN_REQUEST,
  successAction: C.GET_PREVIEW_TOKEN_SUCCESS,
  failureAction: C.GET_PREVIEW_TOKEN_FAILURE
})

export const getThemeAction = asyncAction({
  api: getTheme,
  requestAction: C.GET_PREVIEW_THEME_REQUEST,
  successAction: C.GET_PREVIEW_THEME_SUCCESS,
  failureAction: C.GET_PREVIEW_THEME_FAILURE
})
