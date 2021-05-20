import React from 'react';
import { routes } from './route';
import { Switch, Route, withRouter } from 'react-router-dom';

const Router = () => {
  return (
    <Switch>
      {routes.map(({ path, exact, component: Component }, index) => (
        <Route
          key={index}
          path={path}
          exact={exact}
          render={() => <Component />}
        ></Route>
      ))}
    </Switch>
  );
};

export default withRouter(Router);
