import styled from 'styled-components'

const Flex = styled.div`
  display: flex;
  ${props => props.vertical ? 'flexDirection: column;' : ''}
`

export default Flex
