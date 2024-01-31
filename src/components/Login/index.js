import {useState} from 'react'

import Cookies from 'js-cookie'

import './index.css'

const Login = props => {
  const [errMsg, setErrMsg] = useState('')

  const [username, setUsername] = useState('')

  const [password, setPassword] = useState('')

  const onLogin = async event => {
    event.preventDefault()
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      Cookies.set('jwt_token', data.jwt_token)
      setErrMsg('')
      const {history} = props
      history.replace('/')
    } else {
      setErrMsg(data.error_msg)
    }
  }

  const handleUsernameInput = e => setUsername(e.target.value)

  const handlePasswordInput = e => setPassword(e.target.value)

  return (
    <div className="login-layout">
      <form onSubmit={onLogin} className="login-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
          className="website-logo"
        />
        <div className="placeholders">
          <label className="login-label" htmlFor="username">
            USERNAME
          </label>
          <input
            onChange={handleUsernameInput}
            value={username}
            id="username"
            placeholder="Username"
            type="text"
            className="login-input"
          />
        </div>
        <div className="placeholders">
          <label className="login-label" htmlFor="password">
            USERNAME
          </label>
          <input
            onChange={handlePasswordInput}
            value={password}
            id="password"
            placeholder="Password"
            type="password"
            className="login-input"
          />
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>
        {errMsg && <p className="error-msg">*{errMsg}</p>}
      </form>
    </div>
  )
}

export default Login
