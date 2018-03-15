import PropTypes from 'prop-types'
import styled from 'styled-components'
import { componentFromProps } from 'tools/styled'

export const Caption = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 2rem;
  margin: 0;
`

export const DisplayText = styled(componentFromProps())`
  font-size: 2.7rem;
  font-weight: 600;
  line-height: 3.6rem;
`
DisplayText.defaultProps = {
  element: 'p',
  size: 'large'
}
DisplayText.propTypes = {
  element: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'extraLarge'])
}

export const Heading = styled(componentFromProps())`
  font-size: 1.7rem;
  font-weight: 600;
  line-height: 2.4rem;
  margin: 0;
`
Heading.defaultProps = {
  element: 'h2'
}
Heading.propTypes = {
  element: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'])
}

export const Subheading = styled(componentFromProps())`
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 2.0rem;
  margin: 0;
`
Subheading.defaultProps = {
  element: 'h2'
}
Subheading.propTypes = {
  element: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'])
}

export const Label = styled.span`
  color: #ddd;
  font-size: 1rem;
  line-height: 1.8rem;
`

export const TextStyle = styled.span`
  color: black;
`
TextStyle.defaultProps = {
  variation: 'default'
}
TextStyle.propTypes = {
  variation: PropTypes.oneOf(['default', 'positive', 'negative', 'strong', 'subdue'])
}

export const VisuallyHidden = styled.span`
  position: absolute!important;
  top: 0;
  clip: rect(1px,1px,1px,1px)!important;
  overflow: hidden!important;
  height: 1px!important;
  width: 1px!important;
  padding: 0!important;
  border: 0!important;
`

export const TextContainer = styled.div`
  & > *+* {
    margin-top: 1.6rem;
  }
`
TextContainer.defaultProps = {
  spacing: 'default'
}
TextContainer.propTypes = {
  spacing: PropTypes.oneOf(['default', 'tight', 'loose'])
}
