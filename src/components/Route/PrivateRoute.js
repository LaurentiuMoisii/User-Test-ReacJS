import React, { useContext } from 'react';
import { Route,  Redirect } from 'react-router-dom';
import { StoreContext } from '../Context/Context'

const PrivateRoute = ({component: Component, dd, ...rest}) => {
  const context = useContext(StoreContext)
  console.log(dd)

  return (
    <Route {...rest} render={(props) => {
      if(context.user.isLogged) {
      return <Component {...rest} {...props}></Component>
      } else {
        return <Redirect to={{pathname: '/'}}></Redirect>
      }
    }}> 
    </Route>
  )
}

export default PrivateRoute;