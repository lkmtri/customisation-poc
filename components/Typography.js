import React from 'react'
import styled from 'styled-components'
import Dropdown from 'components/Dropdown'

const Container = styled.div`
  padding: 10px 0;
`

const Section = styled.div`
  background-color: #999;
  padding: 10px;
  margin-bottom: 10px;
`

const SectionHeading = styled.div`
  margin-bottom: 10px;
  color: #ddd;
`

const StyledDropdown = styled(Dropdown)`
  margin-bottom: 6px;
`

class Typography extends React.PureComponent {
  render () {
    const { changeHeadingFont } = this.props

    return (
      <Container>
        <Section>
          <SectionHeading>
            Heading and Button
          </SectionHeading>
          <StyledDropdown
            label='Font'
            onChange={changeHeadingFont}
            choices={[
              {
                value: 'a',
                display: 'A'
              },
              {
                value: 'b',
                display: 'B'
              }
            ]} />
          <StyledDropdown
            label='Font Size'
            choices={[
              {
                value: '15px',
                display: '15px'
              },
              {
                value: '16px',
                display: '16px'
              },
              {
                value: '17px',
                display: '17px'
              }
            ]} />
        </Section>
        <Section>
          <SectionHeading>
            Body Text
          </SectionHeading>
          <StyledDropdown
            label='Font'
            choices={[
              {
                value: 'a',
                display: 'A'
              },
              {
                value: 'b',
                display: 'B'
              }
            ]} />
          <StyledDropdown
            label='Base Size'
            choices={[
              {
                value: '15px',
                display: '15px'
              },
              {
                value: '16px',
                display: '16px'
              },
              {
                value: '17px',
                display: '17px'
              }
            ]} />
        </Section>
      </Container>
    )
  }
}

export default Typography
