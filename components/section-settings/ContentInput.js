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

  render () {
    const { schema, data } = this.props
    const { showContentInputSettings } = this.state
    console.log(showContentInputSettings, schema, data)
    return (
      <React.Fragment>
        <Container onClick={this.toggleContentInputSettings}>
          {schema.name}
        </Container>
        {showContentInputSettings &&
          schema.settings.map((input) => {
            const InputTypeComponent = InputTypeComponents[input.type]
            return <InputTypeComponent key={input.id} value={data.settings && data.settings[input.id]} {...input} />
          })}
      </React.Fragment>
    )
  }
}

export default ContentInput
