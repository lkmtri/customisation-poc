import React from 'react'
import styled from 'styled-components'
import Router from 'next/router'
import Cookies from 'js-cookie'
import Page from 'decorators/Page'
import { TextStyle } from 'components/shared/Typo'
import { loginUser } from 'api/auth'

const PageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`

const InputLabel = styled(TextStyle)``

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  margin-top: 0.3rem;
  font-size: 1rem;
  &:focus {
    outline: none;
  }
`

const LoginFormContainer = styled.div`
  width: 400px;
  height: auto;
  border: 1px #999 solid;
  border-radius: 5px;
  padding: 1rem;
  & > ${InputGroup}+${InputGroup} {
    margin-top: 1rem;
  }
`

const LoginButton = styled.button`
  align-self: center;
  height: 30px;
`

class Login extends React.PureComponent {
  // async componentDidMount () {
  //   const data = await loginUser({})
  //   console.log(data)
  //   if (data.sessionId) {
  //     Router.push('/')
  //   }
  // }

  loginUser = async () => {
    const data = await loginUser({
      username: this._username.value,
      password: this._password.value
    })
    if (data) {
      const { sessionId, username, merchantId } = data
      Cookies.set('sessionId', sessionId)
      Cookies.set('username', username)
      Cookies.set('merchantId', merchantId)
      Router.push('/')
    }
  }

  render () {
    return (
      <PageContainer>
        <LoginFormContainer>
          <InputGroup>
            <InputLabel>Username</InputLabel>
            <Input innerRef={e => { this._username = e }} />
          </InputGroup>
          <InputGroup>
            <InputLabel>Password</InputLabel>
            <Input innerRef={e => { this._password = e }} type='password' />
          </InputGroup>
          <InputGroup>
            <LoginButton onClick={this.loginUser}>Login</LoginButton>
          </InputGroup>
        </LoginFormContainer>
      </PageContainer>
    )
  }
}

export default Page(Login)
