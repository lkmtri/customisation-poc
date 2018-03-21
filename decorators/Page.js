import withRedux from 'decorators/withRedux'

export default (wrappedComponent) => {
  return withRedux(wrappedComponent)
}
