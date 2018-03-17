import React from 'react'

const createBasicInputType = (InputComponent) => class BasicInputType extends React.PureComponent {
  static defaultProps = {
    onChangeAction: () => {}
  }

  handleOnChange = (e) => {
    const { id, onChangeAction } = this.props
    const value = e.target ? e.target.value : e
    onChangeAction({ key: id, value })
  }

  render () {
    return <InputComponent onChange={this.handleOnChange} {...this.props} />
  }
}

export default createBasicInputType
