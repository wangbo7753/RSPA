import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './app'
import Dashboard from './Dashboard';
import Repos from "./Repos";
import Repo from './Repo'
import Inbox from "./Inbox";
import Calendar from "./Calendar";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Dashboard}/>
        <Route path="app" component={Dashboard}/>
        <Route path="repos" component={Repos}>
            <Route path="/repos/:username/:repoName" component={Repo}/>
        </Route>
        <Route path="inbox" component={Inbox}/>
        <Route path="calendar" component={Calendar}/>
    </Route>
)