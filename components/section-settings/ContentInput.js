import React from 'react'
import styled from 'styled-components'
import InputTypeComponents from 'components/input-types'

const Container = styled.div`
  min-height: 50px;
  height: auto;
  display: flex;
  padding: 10px;
  align-items: center;
  background-color: #999;
  cursor: pointer;
  color: #fff;
`

class ContentInput extends React.PureComponent {
  state = {
    showContentInputSettings: false
  }

  toggleContentInputSettings = () => {
    this.setState({ showContentInputSettings: !this.state.showContentInputSettings })
  }

  updateSectionContent = ({ key, value }) => {
    const { sectionId, blockId, updateSectionContentAction } = this.props
    updateSectionContentAction({ sectionId, blockId, key, value })
  }

  render () {
    const { sectionId, blockId, schema, data } = this.props
    const { showContentInputSettings } = this.state

    return (
      <React.Fragment>
        <Container onClick={this.toggleContentInputSettings}>
          {schema.name}
        </Container>
        {showContentInputSettings &&
          schema.settings.map((input) => {
            const InputTypeComponent = InputTypeComponents[input.type]
            return <InputTypeComponent onChangeAction={this.updateSectionContent} sectionId={sectionId} blockId={blockId} key={input.id} value={data.settings && data.settings[input.id]} {...input} />
          })}
      </React.Fragment>
    )
  }
}

export default ContentInput
