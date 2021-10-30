import { Switch } from "react-router";

import Route from "./Route";

// COMPONENTS
import { Error404 } from "../components/Error404";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

export default function Routes() {
  return (
    <Switch>
      {/* FREE ROUTES */}
      <Route path={["/", "signin"]} exact component={SignIn} />
      <Route path="/signup" component={SignUp} />

      {/* AUTHENTICATED ROUTES */}
      <Route exact path="/dashboard" render={() => {}} />

      {/* Errors Page */}
      <Route component={Error404} free />
    </Switch>
  );
}
