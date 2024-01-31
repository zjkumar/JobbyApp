import {withRouter, Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = ({component: Component, ...rest}) => {
  //   console.log(Component, 'this is the component')
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken) {
    return <Route {...rest} render={props => <Component {...props} />} />
  }
  return <Redirect to="/login" />
}

export default withRouter(ProtectedRoute)
