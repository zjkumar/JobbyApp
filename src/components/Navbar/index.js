import {Link, withRouter} from 'react-router-dom'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {
  faHouse,
  faRightFromBracket,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons'

import {useMediaQuery} from 'react-responsive'

import Cookies from 'js-cookie'

import './index.css'

const SmallNavbar = props => {
  const handleLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <nav className="navbar-sm">
      <div className="img-box">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
          className="website-logo-sm"
        />
      </div>
      <ul className="nav-items">
        <li>
          <Link to="/">
            <FontAwesomeIcon className="icon" icon={faHouse} />
          </Link>
        </li>
        <li>
          <Link to="/Jobs">
            <FontAwesomeIcon className="icon" icon={faBriefcase} />
          </Link>
        </li>
        <li>
          <FontAwesomeIcon
            onClick={handleLogout}
            className="icon"
            icon={faRightFromBracket}
          />
        </li>
      </ul>
    </nav>
  )
}

const LargeNavbar = props => {
  const handleLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <nav className="navbar-lg">
      <div className="img-box">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
          className="website-logo-md-lg"
        />
      </div>
      <ul className="nav-items-lg">
        <li>
          <Link style={{textDecoration: 'none', color: 'white'}} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            style={{
              textDecoration: 'none',
              color: 'white',
            }}
            to="/Jobs"
          >
            Jobs
          </Link>
        </li>
      </ul>
      <div className="logout-div">
        <button type="button" className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  )
}

const Navbar = props => {
  const {history} = props
  const isExsmallAndSmallDevice = useMediaQuery({query: '(max-width: 767px)'})

  return isExsmallAndSmallDevice ? (
    <SmallNavbar history={history} />
  ) : (
    <LargeNavbar history={history} />
  )
}

export default withRouter(Navbar)
