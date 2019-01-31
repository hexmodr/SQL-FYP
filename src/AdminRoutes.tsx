import * as React from "react"
import { Switch, Route } from "react-router-dom"
import { FeedbackPage } from "src/FeedbackPage"
import { ReportBugPage } from "src/ReportBugPage"
import { AdminMainPage } from "./AdminMainPage"

export const AdminRoutes = () => (
  <Switch>
    <Route exact path="/" component={AdminMainPage} />
    <Route path="/Feedback" component={FeedbackPage} />
    <Route path="/Report_Bug" component={ReportBugPage} />
  </Switch>
)