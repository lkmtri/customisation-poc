import uuid from 'uuid/v4'

export const makeNewSectionFromSchema = ({ name, type, settings, blocks, presets }) => {
  const newId = `${type}_${uuid()}`
  const sectionSettings = settings.reduce((acc, setting) => {
    acc[setting.id] = setting.default
    return acc
  }, {})
  const sectionBlock = presets.blocks.reduce((acc, block) => {
    const blockSchema = blocks.find(e => e.type === block.type)
    const blockId = `${blockSchema.name}_${uuid()}`
    acc[blockId] = {
      ...blockSchema,
      id: blockId,
      settings: blockSchema.settings.reduce((acc, blockSetting) => {
        acc[blockSetting.id] = blockSetting.default
        return acc
      }, {})
    }
    return acc
  }, {})
  return {
    id: newId,
    data: {
      id: newId,
      type,
      settings: sectionSettings,
      blocks: sectionBlock,
      blocksOrder: Object.keys(sectionBlock)
    }
  }
}
