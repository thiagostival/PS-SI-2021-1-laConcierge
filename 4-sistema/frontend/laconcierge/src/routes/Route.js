import { Redirect, Route } from "react-router";

// HOOKS
import { useAuth } from "../hooks/Auth";

export default function RouteWrapper({
  isPrivate = false,
  component: Component,
  ...rest
}) {
  const { user } = useAuth();

  if (!isPrivate) {
    return (
      <Route
      {...rest}
      render={() => <Component />}
    />
    )
  }

  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (!isPrivate) {
          return <Component />;
        }

        if (isPrivate && !!user) {
          return <Component />;
        }

        if (isPrivate && !user) {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          );
        }
      }}
    />
  );
}
