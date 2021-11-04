import { Switch } from "react-router";

import Route from "./Route";

// COMPONENTS
import { Error404 } from "../components/Error404";

// Pages
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Establishment } from "../pages/client/Establishment";
import { DashboardClient } from "../pages/client/DashboardClient";
import { DashboardEstablishment } from "../pages/establishment/DashboardEstablishment";

export default function Routes() {
  return (
    <Switch>
      {/* FREE ROUTES */}
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />

      {/* AUTHENTICATED ROUTES */}
      <Route path="/client/dashboard" component={DashboardClient} isPrivate />
      <Route path="/client/establishment/:est_id" component={Establishment} isPrivate />

      <Route path="/establishment/dashboard" component={DashboardEstablishment} isPrivate />

      {/* Errors Page */}
      <Route component={Error404} free />
    </Switch>
  );
}
